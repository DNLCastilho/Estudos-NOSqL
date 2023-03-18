db.restaurants.find({rating:{$gte:5}, type_of_food:"Breakfast"})
db.restaurants.find({type_of_food:{$in:["Chinese", "Pizza"]}})
db.restaurants.find({})
db.restaurants.updateMany({rating:5}, {$set:{high_score: true}})
db.restaurants.find({high_score:{$exists:true}}).itcount()
db.restaurants.updateMany({ rating:{ $lte:2 }}, { $set: { bad_restaurants:true } }  )
db.restaurants.createIndex({name:"text"})
db.restaurants.find({$text: {$search:'chinese'}}).pretty()
show dbs