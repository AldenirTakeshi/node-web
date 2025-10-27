const express = require('express')

const server = express()

server.get(`/`, (req,res) => {
    res.send(`Servidor express funcionando \nVoce esta na pagina inicial.`)
})

server.get(`/artigos`, (req, res) => {
    res.send(`Pagina de artigos`)
})

const PORT = 3000

server.listen(PORT,()=> {
    console.log(`Servidor Express iniciado em https://localhost:${PORT}`)
})