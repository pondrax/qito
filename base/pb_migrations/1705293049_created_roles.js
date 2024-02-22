/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f14zqg4ysvwv36a",
    "created": "2024-01-15 04:30:49.806Z",
    "updated": "2024-01-15 04:30:49.806Z",
    "name": "roles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kxmeejx9",
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
        "id": "kxkrge3b",
        "name": "permissions",
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
  const collection = dao.findCollectionByNameOrId("f14zqg4ysvwv36a");

  return dao.deleteCollection(collection);
})
