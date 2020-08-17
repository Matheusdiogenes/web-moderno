const http = require('http')

http.createServer( (req, res) =>{
    res.end('<h1>HELLO WORLD</h1>')
}).listen(8080)