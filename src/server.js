const express = require("express")
const server = express()

//Configurar pasta publica
server.use(express.static("public"))

//Utilizando tamplate engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})
//Configurar caminhos da minha aplicaçao 
//Pagina inicial
//req : e uma requisiçao
//res : e uma resposta 
server.get("/", (req, res) => {
   return res.render("index.html",{ title: "Um titulo"})
})

server.get("/create-point", (req, res) => {
   return res.render("create-point.html")
})

server.get("/search", (req, res) => {
   return res.render("search-results.html")
})




//Ligar o servidor 
server.listen(3000)