function tabuada(n, operacao){    
    const operador = [function adi(i){n + i}, function sub(i){n-i}]
    operacao[0]='a' ? calcula(operador[0]) : ''
    operacao[0]='s' ? calcula(operador[1]) : ''
    
}

console.log(tabuada(1, 'adicao'))