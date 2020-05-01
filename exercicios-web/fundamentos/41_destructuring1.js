// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
//destruturing
const { nome, idade } = pessoa //pegue nome e idade de pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //pegue nome e idade de pessoa e atribua na variável n & i
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa 

console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa //não tente acessar coisas que não existe
console.log(ag, num)