/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5f09mv6opjeo6lr",
    "created": "2024-01-15 04:16:38.063Z",
    "updated": "2024-01-15 04:16:38.063Z",
    "name": "siteDork",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wpf1blrn",
        "name": "url",
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
        "id": "juzyl5bg",
        "name": "status",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "archive",
            "pending",
            "progress",
            "completed"
          ]
        }
      },
      {
        "system": false,
        "id": "bxsgacic",
        "name": "screenshot",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "56dgpfllzwigkcs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "lahmz2z7",
        "name": "detail",
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
        "id": "ta2rjpqz",
        "name": "report",
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
  const collection = dao.findCollectionByNameOrId("5f09mv6opjeo6lr");

  return dao.deleteCollection(collection);
})
