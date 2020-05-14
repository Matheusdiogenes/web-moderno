function formaCorreta(moedas){
    valorReais =`R$ ${(moedas).toFixed(2).toString().replace('.', ',')}`
    console.log(valorReais);    
}

formaCorreta(0.1+0.2)