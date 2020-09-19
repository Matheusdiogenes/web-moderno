const reais = reais => `R$ ${reais.toFixed(2).toString().replace('.',',')}`

console.log(reais(0.3000000000000004));