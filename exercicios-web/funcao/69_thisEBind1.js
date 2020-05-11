//AMARRANDO O this NA FUNÇÃO
//objeto pessoa
const pessoa = {
    saudacao: 'Bom dia!',
    //Método
    falar() {
        console.log(this.saudacao)// acessando saudação: como se fosse pessoa.falar. Necessario usar o this
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

//armazenando função na vvariável
//Passando o objeto para a função bund, o this sempre vai resolver, nesse caso, para pessoa
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()