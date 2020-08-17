//AMARRANDO O this NA FUNÇÃO
function Pessoa() {
    this.idade = 0

    const self = this //self sempre vai aponta para pessoa
    //a cada 1000ms incremente idade
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa