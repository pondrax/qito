/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrci4eeb8dj8kwg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e6e6cd7a",
    "name": "organization",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8y7dmxgsfntr1sp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrci4eeb8dj8kwg")

  // remove
  collection.schema.removeField("e6e6cd7a")

  return dao.saveCollection(collection)
})
