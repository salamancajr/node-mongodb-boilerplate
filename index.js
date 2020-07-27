const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end('Hello World')
}).listen(8082)