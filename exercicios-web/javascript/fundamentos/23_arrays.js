// O array é heterogêneo,ou seja, aceita diferentes tipos de valores
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //tamanho

//add multiplos valores pro array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log("pop:"+valores.pop()) //apaga o último elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores)