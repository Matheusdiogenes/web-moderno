function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`    
}

const carro = {preco: 49990, desc: 0.20}
//                       contexto, param...
console.log(getPreco.call(carro, 0, '#'));
//                       contexto, [param...]
console.log(getPreco.apply(carro, [0.17, '#']));