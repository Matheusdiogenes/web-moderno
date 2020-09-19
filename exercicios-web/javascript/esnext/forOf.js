const algo = 'qualquer coisa'
for (const letra of algo) {
    console.log(letra);    
}

for (const letra of 'Foda') {
    console.log(letra);    
}

const assuntosEcma = ['Set', 'Map', 'ForOf']
for (let iterator in assuntosEcma) {
    console.log(iterator);
    
}

for (const iterator of assuntosEcma) {
    console.log(iterator);
    
}

const assuntosMap = new Map([
    ['Map', {abortado: true}],
    ['Set', {abortado: true}],
    ['Promise', {abortado: false}]
])

for (const assunto of assuntosMap) {
    console.log(assunto);
}

for (const assunto of assuntosMap.values()) {
    console.log(assunto);
}

//destruturar
for (const [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor);
}

const a = new Set(['a', 'b', 'c'])
for (const iterator of a) {
    console.log(iterator);
    
}