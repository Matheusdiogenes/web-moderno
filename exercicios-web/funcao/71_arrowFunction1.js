//Função arrow sempre é anônima, se você quer chamar a função, tem que armazenanr em uma const/variável
let dobro = function (a) {
    return 2 * a
}
//arrow
dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

//colcando o bloco, obrigatoriamente tem que ter o return
let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())