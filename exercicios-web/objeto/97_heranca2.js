// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //Não faça isso
const avo = { attr1 : 'A'}
const pai = { __proto__ : avo, attr2 :'B'}
const filho = {__proto__ :pai, attr3 : 'C'}
console.log( filho.attr0, filho.attr1);

const carro = {
    velAtual: 0,
    velMax: 500,

    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax ){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }

    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}km/k`        
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 258 //shadowing
}

const golzin = {
    modelo: 'gol2020',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(golzin, carro)

console.log(ferrari);
console.log(golzin);

golzin.acelerarMais(50)
console.log(golzin.status());
console.log(golzin);

