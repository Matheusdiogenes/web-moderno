const casaTotal = []
const dadosCasaTotal = require('fs').readFileSync('./leitura/casaTotal.txt', 'utf8').split('\n').forEach(element => {
    casaTotal.push(parseInt(element))
})

const casaCasa = []
const dadosCasaCasa = require('fs').readFileSync('./leitura/casaCasa.txt', 'utf8').split('\n').forEach(element => {
    casaCasa.push(parseInt(element))
})

analiseTimeDaCasa = function(){
    const mediaCasaTotal = casaTotal.reduce((total, accum) => total + accum, 0) / casaTotal.length
    const mediaEmCasa = casaCasa.reduce((total, accum) => total + accum, 0) / casaCasa.length
    return `MANDANTE NOS ULTIMOS 10 JOGOS\nMedia Geral: ${mediaCasaTotal } \nMedia Casa: ${mediaEmCasa}`
}

const foraTotal = []
const dadosForaTotal = require('fs').readFileSync('./leitura/foraTotal.txt', 'utf8').split('\n').forEach(element => {
    foraTotal.push(parseInt(element))
})

const foraFora = []
const dadosForaFora = require('fs').readFileSync('./leitura/foraFora.txt', 'utf-8').split('\n').forEach(element => {
    foraFora.push(parseInt(element))
})

analiseTimeDeFora = function(){
    const mediaForaTotal = foraTotal.reduce((total, accum) => total + accum, 0) / foraTotal.length
    const mediaForaFora = foraFora.reduce((total, accum) => total + accum, 0) / foraFora.length
    return `VISITANTE NOS ULTIMOS 10 JOGOS \nMedia Geral: ${mediaForaTotal} \nMedia Fora: ${mediaForaFora}`
}

console.log(analiseTimeDaCasa());
console.log(analiseTimeDeFora());
