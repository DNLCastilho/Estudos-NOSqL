db.pessoa.drop()
db.enderecos.drop()
db.compras.drop()
show dbs
use pessoas
db.pessoa.insertOne({nome:"Daniel", idade: 30, profissao:"programador"})


const daniel = db.pessoa.findOne({nome:"Daniel"})
daniel
const danielId = daniel._id

db.enderecos.insertOne({
    rua: "Rua das flores",
    número: "1441",
    complemento: "casa",
    pessoa_id: daniel._id})

db.enderecos.find({pessoa_id:danielId})

db.pessoa.insertOne({nome:"Gustavo", idade: 29, profissao: "gerente"})

const gustavo = db.pessoa.findOne({nome:"Gustavo"})

gustavoId = gustavo._id


db.pessoa.insertOne({nome:"Lucas", idade: 23, profissao: "Vendedor"})

const lucas = db.pessoa.findOne({nome:"Lucas"})

lucasId = lucas._id

db.pessoa.find({})

db.compras.insertMany([{produtos: ["Livro","Celular"], pessoa_id:danielId}, {produtos:["mouse", "teclado"], pessoa_id:danielId}])

db.compras.insertMany([{produtos: ["Caneta","Tablet"], pessoa_id:gustavoId}, {produtos:["Monitor", "Webcam"], pessoa_id:gustavoId}])

db.compras.find({})


db.compras.find({pessoa_id:gustavoId}).count()

db.cursos.insertMany([ {nome: "PHP avançado"}, {nome:"JavaScript Básico"}, {nome:"Banco de dados NoSQL"}])

db.cursos.find({})

const php = db.cursos.findOne({nome:"PHP avançado"})
php

const js = db.cursos.findOne({nome:"JavaScript Básico"})
js

const nosql = db.cursos.findOne({nome:"Banco de dados NoSQL"})
nosql

db.cusro_pessoa.insertMany([{curso_id:php._id, pessoa_id:daniel._id},{curso_id:php._id, pessoa_id:gustavo._id},{curso_id:js._id, pessoa_id:danielId}])

db.cusro_pessoa.find({})

const idsAlunos = [];

db.cusro_pessoa.find({ curso_id:js._id}).forEach(function(aluno){
    idsAlunos.push(aluno.pessoa_id);});

db.pessoa.find({_id: {$in: idsAlunos}})

db.cusro_pessoa.insertOne({ curso_id: js._id, pessoa_id: lucas._id})


db.cusro_pessoa.find({})

)




























