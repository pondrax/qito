/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3fwb1507tjapv2y")

  // remove
  collection.schema.removeField("39iqvd4m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szoqvdqq",
    "name": "version",
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
  const collection = dao.findCollectionByNameOrId("3fwb1507tjapv2y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "39iqvd4m",
    "name": "detail",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("szoqvdqq")

  return dao.saveCollection(collection)
})
