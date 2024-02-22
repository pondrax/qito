/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "56dgpfllzwigkcs",
    "created": "2024-01-11 11:02:37.189Z",
    "updated": "2024-01-11 11:02:37.189Z",
    "name": "sitesMedia",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aqzck67y",
        "name": "media",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("56dgpfllzwigkcs");

  return dao.deleteCollection(collection);
})
