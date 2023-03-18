use livroData
show collections
db.livrosc.find({}).pretty()
db.livrosc.find({pageCount:362})
db.livrosc.find({title:"MongoDB in Action"})
db.livrosc.find({categories:{$in:["Java","Internet"]}}).pretty()
db.livrosc.find({pageCount:{$gt:450}}).pretty()
db.livrosc.find({pageCount:{$gt:800},_id:{$gt:122}})
db.livrosc.find({pageCount:{$lt:150}})
db.livrosc.find({$or:[{pageCount:{$gt:800}},{_id:{$lt:122}}]})
db.livrosc.find({pageCount:{$gt:600}}).itcount()
db.livrosc.find({pageCount:{$lt:100}})
db.livrosc.find({categories:"Microsoft",pageCount:{$gt:300}})
db.livrosc.find({ categories: "Web Development" }).count()
db.livrosc.find({ $or: [{ authors: "Bret Updegraff" }, { categories: "Mobile" }] })
db.livrosc.updateOne({_id: 314} , {$set:{pageCount:614}})
db.livrosc.find({_id:314})
db.livrosc.updateOne({_id: 314} , {$set:{pageCount:614}})
db.livrosc.updateMany({categories:"Java"} , {$set:{status:"UMPUBLISHED"}})
db.livrosc.find({categories:"Java"})
db.livrosc.updateMany({authors:"Vikram Goyal"} , {$set:{dowlonads:1000}})
db.livrosc.find({authors:"Vikram Goyal"})
db.livrosc.replaceOne({_id:120} , {foi:"Substituido"})
db.livrosc.find({_id:120})
db.livrosc.find({_id:201})
db.livrosc.updateOne({_id:201} , {$push:{categories:"PHP"}})
db.livrosc.deleteOne({_id:20})
db.livrosc.find({_id:20})

" dados"
db.livrosc.find()
const test = db.livrosc.findOne({title:"Specification by Example"})
typeof test
test.categories




















 