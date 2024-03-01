module.exports = {
  zone: () => {
    console.log(new Date(), "Fetching DNS Zones")
    const env = require(`${__hooks}/env.js`)

    const res = $http.send({
      url: `https://api.cloudflare.com/client/v4/zones/${env.CLOUDFLARE_ZONE_ID}/dns_records?per_page=1000`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        "authorization": env.CLOUDFLARE_API_TOKEN
      }
    })

    if (res.statusCode == 200) {
      const collection = $app.dao().findCollectionByNameOrId("sites")
      res.json.result.map(r => {
        let record;
        try {
          record = $app.dao().findFirstRecordByData("sites", "name", r.name)
          // record.set('id', r.name.replace('.' + env.ZONE, ''))
          console.log(r.name.replace('.' + env.ZONE, ''))
          record.set('content', r.content)
          record.set('type', r.type)
        } catch (e) {
          record = new Record(collection, {
            // id: r.name.replace('.' + env.ZONE, ''),
            name: r.name,
            type: r.type,
            content: r.content
          })
        }
        if (r.type == 'A') {
          console.log(JSON.stringify(record.id))
          $app.dao().saveRecord(record)
        }
      })
    }
  },
  audit: () => {
    const env = require(`${__hooks}/env.js`)

    const sites = arrayOf(new DynamicModel({
      id: '',
      name: '',
      // created: null
    }))

    $app.dao().db()
      .newQuery(`SELECT s.id, name, sa.created 
      FROM sites s
      LEFT JOIN sitesAudit sa ON s.id = sa.siteId AND date(sa.created) = strftime('%Y-%m-%d', 'now')
      WHERE sa.created IS NULL
      GROUP BY s.id
      ORDER BY RANDOM() 
      LIMIT 10;
      `)
      // SELECT s.id, name, sa.created FROM sites s
      // LEFT JOIN sitesAudit sa ON s.id = sa.siteId AND date(sa.created) = strftime('%Y-%m-%d', 'now')
      // WHERE sa.created IS NULL
      // GROUP BY s.id
      // LIMIT 10
      .all(sites)

    sites.map(s => {
      console.log('Take shot => ', s.name)
      const domain = s.name
      // const domain = 'www.mojokertokota.go.id'
      const look = $http.send({
        url: `${env.PLUGIN_API}/api/lookup?domain=${domain}`,
        headers: { "content-type": "application/json" },
      })
      const req = $http.send({
        url: `${env.PLUGIN_API}/api/screenshot?url=https://${domain}`,
        headers: { "content-type": "application/json" },
      })

      const site = $app.dao().findRecordById("sites", s.id);
      const sitesAudit = $app.dao().findCollectionByNameOrId("sitesAudit");
      const sitesMedia = $app.dao().findCollectionByNameOrId("sitesMedia");
      // console.log(JSON.stringify(req))
      // console.log(req.statusCode, look.statusCode) // the response HTTP status code

      if (!req.json) {
        return;
      }
      console.log('saved')
      site.set('local', look.json.ip)
      site.set('secure', look.json.ports.some(obj => obj.hasOwnProperty("443")))
      site.set('ports', look.json.ports)
      // site.set('secure', Object.keys(look.json.ports).includes(443))
      $app.dao().save(site);
      let status = 'success';
      if (req.json.size == '-1') {
        status = 'error'
      }
      const auditRecord = new Record(sitesAudit, {
        siteId: site.get('id'),
        size: req.json.size,
        elapsed: req.json.elapsed,
        screenshot: req.json.id,
        status
      })
      $app.dao().save(auditRecord);

      try {
        const mediaRecord = new Record(sitesMedia, {
          id: req.json.id
        })

        $app.dao().save(mediaRecord)

        const form = new RecordUpsertForm($app, mediaRecord)
        const ss = $filesystem.fileFromBytes(req.json.screenshot, 'screenshot.png')
        form.addFiles('media', ss)
        form.submit()
      } catch (e) {

      }

    })
  },
  portal: () => {
    const env = require(`${__hooks}/env.js`)

    const req = $http.send({
      url: `${env.PLUGIN_API}/api/portal-bsre`,
      headers: { "content-type": "application/json" },
    })

    const certs = $app.dao().findCollectionByNameOrId("certificate");

    console.log('Fetch certificate')
    if (!req.json) {
      return;
    }
    console.log('Saving cert', req.json.data.length)
    if (req.json.data.length == 0) {
      return false;
    }
    req.json.data.map(res => {
      // console.log(res.id)
      let cert;
      try {
        cert = $app.dao().findRecordById("certificate", res.id)
        cert.load(res)
      } catch (e) {
        cert = new Record(certs, res)
      }
      $app.dao().saveRecord(cert)
    })
    return true;
  }
}