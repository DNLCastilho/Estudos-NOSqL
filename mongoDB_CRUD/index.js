show collections

db.inspections.find({})

db.inspections.find({certificate_number:{$gt: 5000000}})

db.inspections.createIndex({certificate_number:1})

db.inspections.createIndex({address:1})

db.inspections.find({"address.city": "JAMAICA"})

db.inspections.getIndexes()

db.inspections.find({certificate_number:3030353}).explain()



