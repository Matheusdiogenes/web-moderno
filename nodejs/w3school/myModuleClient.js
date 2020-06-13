const http = require('http')
const dt = require('./myModule')

http.createServer(function (req, resp){
    resp.writeHead(200, {'Content-text': 'text:html'})
    resp.write("The date and time are currently: " + dt.mydateTime())
    resp.end()
}).listen(8080)