/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3fwb1507tjapv2y",
    "created": "2024-01-15 04:28:44.965Z",
    "updated": "2024-01-15 04:28:44.965Z",
    "name": "templates",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "won1imut",
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
        "id": "39iqvd4m",
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
  const collection = dao.findCollectionByNameOrId("3fwb1507tjapv2y");

  return dao.deleteCollection(collection);
})
