/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("clj5slhg5iiv44q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "65qruuzi",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "dork",
        "link"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("clj5slhg5iiv44q")

  // remove
  collection.schema.removeField("65qruuzi")

  return dao.saveCollection(collection)
})
