// FileSysten
const fs = require('fs') 

const caminho = __dirname + '/arquivo.json'
//sicrono....

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

// assincrono ...
fs.readFile(caminho,'utf-8', (err, conteudo) =>{
    //olhar se 'err' está vazio
    const config = JSON.parse(conteudo)
    console.log(`${config.bd.host}: ${config.bd.porta}`);
})
//lendo o conteúdo de um arquivo
const config = require('./arquivo.json')
console.log(config.bd);

//lendo o conteúdo de uma pasta
fs.readdir(__dirname,(err, arquivos)=>{
    console.log(arquivos);
    
})