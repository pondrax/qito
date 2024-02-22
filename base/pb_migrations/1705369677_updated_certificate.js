/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fyobd8g4jkjmpe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fy9qjjgn",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "NEW",
        "VERIFIED",
        "UPDATE"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fyobd8g4jkjmpe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fy9qjjgn",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "VERIFIED",
        "UPDATE"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
