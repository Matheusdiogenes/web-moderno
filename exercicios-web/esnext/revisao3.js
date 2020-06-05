//ES8 Object.values/Objecto.entries
const obj = {a:1, b:2}
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Falatu'
    }
}

console.log(pessoa.nome, pessoa.ola());

//Class
class Animal {}
class gato extends Animal {
    falar(){
        return 'miau'
    }
}
console.log(new gato().falar());
