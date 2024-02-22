/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53dz5eh44pdz5p4")

  // remove
  collection.schema.removeField("k03hmqt3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dp4ybqeb",
    "name": "screenshot",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "56dgpfllzwigkcs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53dz5eh44pdz5p4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k03hmqt3",
    "name": "screenshot",
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

  // remove
  collection.schema.removeField("dp4ybqeb")

  return dao.saveCollection(collection)
})
