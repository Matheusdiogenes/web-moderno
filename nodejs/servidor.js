const http = require('http')


http.createServer(function(req, res){
    res.end('<h1> Messagem </h1>') //se tirar essa linha vai ficar em loop
}).listen(8080)
 