/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/apix/presensi", (c) => {
  const API_URL = "https://e-presensi.mojokertokota.go.id/service.php";
  let nip = c.queryParam('nip')
  let password = c.queryParam('password')
  let body = {}
  let result;

  try {
    // console.log(c.queryParam('nip'))
    // let password = c.queryParam('password')
    // let name = c.pathParam("name")
    body = {
      "jsonrpc": "2",
      "method": "POST",
      "object": "login",
      "param": {
        // "nip": '',
        "nip": nip,
        "password": password,
        "last_latlong": ""
      }
    };


   result = $http.send({
      url: API_URL,
      method: "POST", 
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "user-agent": "Dart/2.16 (dart:io)",
        "Accept-Encoding": "gzip, deflate",
        "host": "e-presensi.mojokertokota.go.id"
      }
    });
    // console.log(JSON.stringify(res))
    // result = res.json()
  } catch (e) {
    console.log(e)
  }

  // console.log(res)
  return c.json(200, { API_URL, body, result })
}, /* optional middlewares */)

