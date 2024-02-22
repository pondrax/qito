/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53dz5eh44pdz5p4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "stqrecho",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "success",
        "updated",
        "error"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53dz5eh44pdz5p4")

  // remove
  collection.schema.removeField("stqrecho")

  return dao.saveCollection(collection)
})
