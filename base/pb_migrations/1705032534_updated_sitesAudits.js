/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53dz5eh44pdz5p4")

  collection.name = "sitesAudit"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("53dz5eh44pdz5p4")

  collection.name = "sitesAudits"

  return dao.saveCollection(collection)
})
