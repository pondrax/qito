/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fyobd8g4jkjmpe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bwo8fyzt",
    "name": "position",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7gtm4kgp",
    "name": "unit",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "walz0k8k",
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
  const collection = dao.findCollectionByNameOrId("4fyobd8g4jkjmpe")

  // remove
  collection.schema.removeField("bwo8fyzt")

  // remove
  collection.schema.removeField("7gtm4kgp")

  // remove
  collection.schema.removeField("walz0k8k")

  return dao.saveCollection(collection)
})
