function falaDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (frase.length < 5) {
                resolve(frase)                
            } else {
                reject(frase)                
            }
        }, segundos*1000)
    })
}

falaDepoisDe(2, "Falaaaaaaaaaaaaa")
.then(frase=> console.log(frase.concat('TU')))
.catch(()=>{console.log('Ocorreu um erro')})

