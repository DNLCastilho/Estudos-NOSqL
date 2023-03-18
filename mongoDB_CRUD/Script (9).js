db.getCollection("mega1").find({})

db.mega1.updateMany({}, {$rename:{"bola 1":'bola_1', "bola 2":'bola_2',"bola 3":'bola_3',"bola 4":'bola_4',"bola 5":'bola_5',"bola 6":'bola_6'}})

db.mega1.find({})

db.mega1.find({"bola_6": {$exists:true}}).forEach( function(x) {
    db.mega1.update({_id: x._id}, {$set: {'bola_6': NumberInt(x.bola_6)}});
});


db.mega1.find({"bola_1":3})