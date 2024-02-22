/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fyobd8g4jkjmpe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wk0z5f3a",
    "name": "notBefore",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kuqitqfi",
    "name": "notAfter",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fyobd8g4jkjmpe")

  // remove
  collection.schema.removeField("wk0z5f3a")

  // remove
  collection.schema.removeField("kuqitqfi")

  return dao.saveCollection(collection)
})
