const http = require('http')
const fs = require('fs')
const porta = 443


const servidor = http.createServer((req, res) => {
  fs.readFile('site.html', (err,arquivo) => {
    res.writeHead(200,{'content-type': 'text/html'})
    res.write(arquivo)
    return res.end()
  })
})

servidor.listen(porta, () => {console.log('servidor rodando') })