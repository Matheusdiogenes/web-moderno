//Criando objeto de forma dinâmica
const time = new Object
time.nome = 'Flamengo'
console.log(time);
delete time.nome
console.log(time);

//Criando objeto de forma literal
const carro = {
    nome: 'BMW',
    dono: {
        nome: 'Matheus'
    }
}
console.log(carro.dono.nome);