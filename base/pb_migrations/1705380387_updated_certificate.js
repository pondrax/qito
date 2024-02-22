/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4fyobd8g4jkjmpe")

  collection.indexes = [
    "CREATE INDEX `idx_lWKXoiw` ON `certificate` (\n  `nik`,\n  `nip`,\n  `email`,\n  `status`,\n  `certificateStatus`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9eyitypy",
    "name": "phone",
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
  const collection = dao.findCollectionByNameOrId("4fyobd8g4jkjmpe")

  collection.indexes = []

  // remove
  collection.schema.removeField("9eyitypy")

  return dao.saveCollection(collection)
})
