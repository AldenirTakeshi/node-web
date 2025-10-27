// importa metodos http do proprio node
const http = require('node:http')

// Cria um servidor 
const server = http.createServer((req, res) => {
    const path = req.url

    switch (path) {
        case `/`:
            res.writeHead(200)
            res.write(`Pagina inicial`)
            break;
        
        case `/artigos`:
            res.writeHead(200)
            res.write(`Pagina de artigos`)
            break;
        
        default:
            res.writeHead(404)
            res.write(`Not Found`)
            break;
    }

    res.end()
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})