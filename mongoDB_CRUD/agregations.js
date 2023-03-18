db.books.find({})
/*Agrupa dados por grupos definido num array*/
db.books.aggregate([
    {
    $bucket:{
        groupBy:"$pageCount",
        boundaries: [100,200,300,400,500,600,700],
        default: "OTHERS",
        output:{
            "count":{$sum:1} 
        }
    }
    
}])

/* agrupamento de forma automatica*/

db.books.aggregate([
    {
        $bucketAuto:{
            groupBy: "$categories",
            buckets: 6
        }
    
}])

db.books.aggregate([{$collStats:{queryExecStats:{}, count:{}} }]) /* informações sobre a collections*/


/* organizar dados em ordem crescente ou decrescente*/

db.books.aggregate([
    {
        $sort:{status: 1} 
    
}]).pretty()


db.books.aggregate([
    { $match:{categories:"Java", pageCount:{$gt:800}}   },
    {$limit:5},
    { $out:"bigjavabooks"}])

show collections
db.bigjavabooks.find({}).pretty()


db.books.aggregate([
    {$match:{authors:"Gavin King"}},
    {$sort:{pageCount: -1}},
    {$limit: 3},
    {$project:{title: 1}}
    ]).pretty()
    
    
db.books.aggregate([
    {$match:{categories:"Java"}},
    {$sort:{pageCount: -1}},
    {$project:{title: 1, authors:1}},
    {$sample:{size:10}}
    ]).pretty()
    
    
db.books.aggregate([
    {$unionWith: "$categories"},
    {$project:{categories:1}}
    ])
db.books.aggregate([
    {$unionWith: "$categories"},
    {$sortByCount:"$categories"}
    ]).pretty()

    
db.books.aggregate([
    {$unionWith: "$authors"},
    {$sortByCount:"$authors"}
    ]).pretty()