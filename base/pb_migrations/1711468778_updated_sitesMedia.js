/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("56dgpfllzwigkcs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqzck67y",
    "name": "media",
    "type": "file",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [
        "640x360"
      ],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("56dgpfllzwigkcs")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqzck67y",
    "name": "media",
    "type": "file",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [
        "320x180"
      ],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
