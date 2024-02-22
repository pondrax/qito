/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "clj5slhg5iiv44q",
    "created": "2024-01-15 07:57:35.305Z",
    "updated": "2024-01-15 07:57:35.305Z",
    "name": "monitor",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qj3cxcxj",
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
        "id": "ihcictdz",
        "name": "detail",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "vl50o8iz",
        "name": "config",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
  const collection = dao.findCollectionByNameOrId("clj5slhg5iiv44q");

  return dao.deleteCollection(collection);
})
