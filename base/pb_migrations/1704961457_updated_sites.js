/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrci4eeb8dj8kwg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pxogxdsy",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrci4eeb8dj8kwg")

  // remove
  collection.schema.removeField("pxogxdsy")

  return dao.saveCollection(collection)
})
