//aula135
const fs = require('fs')

const porduto = {
    nome: "Notebook",
    preco: 1254.55
}

fs.writeFile(__dirname+ '/arquivoGerado.json', JSON.stringify(porduto), err => {
    console.log(err || 'Arquivo salvo!');
    
})