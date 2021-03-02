const bodyParser = require("body-parser")
const express = require("express")
const app = express()

app.use(express.static('.')) //sirva todos arquivos static nessa pasta
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/teste', (req, res)=> res.send('OK'))
app.listen(8080, ()=> console.log('Executando...'))