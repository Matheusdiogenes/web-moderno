function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 1555.98
const parcelaPreco = 3
console.log(real `1x de ${preco} ou 19x de ${parcelaPreco}`);
