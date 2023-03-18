db.alunos.insertMany([ { nome: "Matheus", matematica: [8, 7, 10, 8] }, { nome: "Pedro", matematica: [8, 8, 9, 7] }, { nome: "Maria", matematica: [6, 4, 10, 9] }, ])

db.alunos.find({})
db.alunos.find({matematica:8})


db.alunos.find({matematica:{$size:4}})

db.produtos.insertMany([ 
{ nome: "Camisa", variacoes: [ 
    { cor: "Vermelha", tamanho: "P", qtd: 10 }, 
    { cor: "Azul", tamanho: "M", qtd: 25 }, 
    { cor: "Verde", tamanho: "G", qtd: 48 }, ] }, 
    { nome: "Calça", variacoes: [ 
        { cor: "Preta", tamanho: 42, qtd: 12 }, 
        { cor: "Cinza", tamanho: 46, qtd: 20 }, 
        { cor: "Azul", tamanho: 46, qtd: 32 } ] } ])

db.produtos.find({})

db.produtos.find({"variacoes.qtd":{$gt:30}})

db.produtos.find({variacoes: {$elemMatch:{tamanho:{$gte:46}, cor:{$eq:"Azul"}}}})


db.pessoas.find({})

db.blog.insertMany([
 { author: "Matheus Battisti", postCount: 10, likesReceived: 150, categories: ["PHP", "JavaScript", "MongoDB"], active: true, maxPosts: 100 }, 
 { author: "Jhon Doe", postCount: 219, likesReceived: 12890, categories: ["Java", "C#", "C"], active: false, maxPosts: 100 }, 
 { author: "Maria Marin", postCount: 8, likesReceived: 12, categories: ["Linux", "DevOps", "Docker"], active: true, maxPosts: 100 }, 
 ])
 
 db.blog.find({})
 
 db.blog.updateOne({author:"Matheus Battisti"},{$inc:{postCount:2}})
 
 
db.blog.insertOne({author:"Maicon Santos", postCount:50, likesReceived:50})
 
db.blog.updateOne({author:"Maicon Santos"}, {$min:{postCount:0}})
 
db.blog.updateOne({author:"Maicon Santos"}, {$max:{maxPosts:250}})

db.blog.updateOne({author:"Matheus Battisti"}, {$mul:{maxPosts:2}})

 db.blog.find({})
db.blog.updateMany({},{$rename:{author: "author_fullname"}})

db.blog.updateOne({author_fullname: "Matheus Battisti"},{$addToSet:{categories:{$each:["PHP","Vue,"]}}})

db.blog.updateOne({author_fullname: "Matheus Battisti"}, { $push:{categories:"Linux"}})


db.blog.updateMany({}, { $push:{categories:"programação"}})


db.blog.updateOne({author_fullname: "Matheus Battisti"}, { $push:{categories:{$each:["HTML","CSS"]}}})


db.blog.updateMany({author_fullname: "Matheus Battisti"}, { $push:{categories:{$each:["HTML","CSS"]}}})



 
 







