//Em funções arrow o this não varia, O THIS aponta pro objeto no qual a função foi definida
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa