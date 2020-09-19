const obj = {}
Object.defineProperties(obj,{
    nome: {
        value: 'Matheus',
        writable: false,
        enumerable: true
    }
})
obj.nome = 'Silva'
console.log(obj);