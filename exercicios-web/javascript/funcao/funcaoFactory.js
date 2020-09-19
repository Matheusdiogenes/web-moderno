// 1. Função Factory é uma função que retorna um objeto
// 2. Diferença entre função factory e class ? Na função fectory o this não varia, a função factory tem contexto léxico

function criarJogador(nome, posicao){
    return {
        nome,
        posicao,
        camisa: Math.floor(Math.random() * 11)
    }
}
//console.log(criarJogador('Matheus','Atacante'));

function criarPessoa(nome){
    this.falar = function() {
        console.log(`Meu nome é ${nome}`);
    }
}
const nasceu = new criarPessoa('Matheus')
nasceu.falar()
const nasceu1 = new criarPessoa('Ju')
nasceu1.falar()