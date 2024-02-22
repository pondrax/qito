/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kj0qkti69uu798m",
    "created": "2024-01-15 08:02:45.536Z",
    "updated": "2024-01-15 08:02:45.536Z",
    "name": "monitorResult",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t22oil3p",
        "name": "monitor",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "clj5slhg5iiv44q",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("kj0qkti69uu798m");

  return dao.deleteCollection(collection);
})
