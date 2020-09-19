//Closures: A função sabe onde ela foi definida
function vinteUm(){
    let pontos = 0    
    //priv
    function teste(){
        console.log('Testando...');
    }
    //public
    this.falar = function(){
        return 'É minha vez!'
    }
    //public
    this.puxar = function(){
        let carta = Math.floor(Math.random() * 10)
        
        if(pontos <= 21){
            console.log(`Você puxou ${carta}`);
            if(pontos+carta > 21){
                pontos+=carta 
                console.log('Você estourou');
                console.log(`Sua Pontuação: ${pontos}`);

            }else{
                pontos+=carta                 
                console.log(`Sua Pontuação: ${pontos}`);
            }
        }

    }

    this.quantosPontos = function(){
        return pontos
    }
}

const jogador = new vinteUm
console.log(jogador.falar())
jogador.puxar()
jogador.puxar()
jogador.puxar()
jogador.puxar()
jogador.puxar()
jogador.puxar()
