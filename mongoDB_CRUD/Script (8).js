db.numeros.insertMany([{"chave_1": "2","chave_2": "7","chave_3": "8" },{"chave_1": "222","chave_2": "55","chave_3": "10" } ])
db.numeros.find({})


db.numeros.find({"chave_1": {$exists:true}}).forEach( function(x) {
    db.numeros.update({_id: x._id}, {$set: {'chave_1': NumberInt(x.chave_1)}});
});