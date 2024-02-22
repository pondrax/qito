/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrci4eeb8dj8kwg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khcst9ht",
    "name": "type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrci4eeb8dj8kwg")

  // remove
  collection.schema.removeField("khcst9ht")

  return dao.saveCollection(collection)
})
