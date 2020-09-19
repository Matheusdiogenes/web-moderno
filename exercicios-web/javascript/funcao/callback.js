function getApostaGanha(valorApostado,odd, callback){
    let total = valorApostado * odd
    return callback(total)
}

getApostaGanha(10,1.5, (lucro) => {
    const lucroP = lucro - 10
    console.log(lucroP)
})






