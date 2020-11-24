const express = require("express")

require("./database")

const routes = require("./routes")

const server = express()

server.use(express.json())

server.use(routes)

server.listen(3333,()=> console.log("Servidor Rodando na Porta 3333"))
