/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8y7dmxgsfntr1sp",
    "created": "2024-01-11 01:47:30.149Z",
    "updated": "2024-01-11 01:47:30.149Z",
    "name": "organizations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0pwhsbb0",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hb7ujc53",
        "name": "detail",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8y7dmxgsfntr1sp");

  return dao.deleteCollection(collection);
})
