/// <reference path="../pb_data/types.d.ts" />

// Fetch DNS every hour
cronAdd("cf-zone", "0 * * * *", () => {
  const lib = require(`${__hooks}/lib.js`)
  lib.zone()
})

$app.rootCmd.addCommand(new Command({
  use: "cf-zone",
  run: (cmd, args) => {
    const lib = require(`${__hooks}/lib.js`)
    lib.zone()
  }
}))


// Fetch DNS every 2 minutes
cronAdd("audit", "*/3 * * * *", () => {
  // return;
  const lib = require(`${__hooks}/lib.js`)
  lib.audit()
})

$app.rootCmd.addCommand(new Command({
  use: "audit",
  run: (cmd, args) => {
    const lib = require(`${__hooks}/lib.js`)
    lib.audit()
  }
}))


// Fetch Certificate every hour
cronAdd("portal", "0 * * * *", () => {
  const lib = require(`${__hooks}/lib.js`)
  if (!lib.portal()) {
    lib.portal()
  }
})

$app.rootCmd.addCommand(new Command({
  use: "portal",
  run: (cmd, args) => {
    const lib = require(`${__hooks}/lib.js`)
    if (!lib.portal()) {
      lib.portal()
    }
  }
}))


$app.rootCmd.addCommand(new Command({
  use: "test",
  run: (cmd, args) => {
    const result = arrayOf(new DynamicModel({
      id: '',
      name: '',
      // created: null
    }))

    $app.dao().db()
      .newQuery(`SELECT s.id,name,sa.created  
      FROM sites s LEFT JOIN sitesAudit sa ON s.id = sa.siteId AND date(sa.created)=strftime('%Y-%m-%d','now')
      GROUP BY s.id`)
      .all(result)

    console.log(JSON.stringify(result[0]))
  }
}))