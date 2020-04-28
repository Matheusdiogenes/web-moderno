//pode concatenar assim
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
//Ou usa o template
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

{
// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

//função
const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)
}