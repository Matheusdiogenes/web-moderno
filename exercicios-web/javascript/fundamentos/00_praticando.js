const linguagem = "JavaScript"
const fala = `
    estou paticando
    ${linguagem}
`
console.log(fala)

const time = {
    nome : "Flamengo",
    torcida : 400000,
    tecnico : "Jesus"
}
console.log(time)

function funcaoSoma(a = 0, b = 0){
    console.log("Resultado da soma: ".concat(a+b))
}
funcaoSoma()

const varDeFun = function (str){
    console.log("Alô ".concat(str))
}
varDeFun("brasil")
varDeFun(5)
varDeFun()