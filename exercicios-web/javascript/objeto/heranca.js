const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'} //op 1
const filho = {attr3: 'C'}
Object.setPrototypeOf(filho, pai) //op 2
console.log(filho.attr1); // A

const p1 = {
    nome: 'Thaynar',
    corPele: 'Moreno(a)',
    mae: 'Aila',
    detalhes(){
        return `${this.nome} é filho(a) de ${this.mae} e é ${this.corPele}`
    }
}
const p2 = {
    nome: 'Matheus',    
    detalhes(){
        return `${super.detalhes()} e tem 22 anos`
    }
}
Object.setPrototypeOf(p2, p1)
console.log(p2.detalhes());


const mae = {nome: 'aila', corCabelo: 'Preto'}

const filha = Object.create(mae,{
    nome:{value: 'Thaynar', writable: false, enumerable: true},
    irmao: {value:'Matheus', writable: false, enumerable: true}
})

console.log(filha.corCabelo, filha.nome, filha.irmao);
for (const key in filha) {
    filha.hasOwnProperty(key) ? console.log(key) : console.log(`por herança ${key}`)
}