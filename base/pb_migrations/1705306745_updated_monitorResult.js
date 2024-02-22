/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kj0qkti69uu798m")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zawrs1sg",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "archive",
        "pending",
        "progress",
        "completed"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kj0qkti69uu798m")

  // remove
  collection.schema.removeField("zawrs1sg")

  return dao.saveCollection(collection)
})
