const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// outra forma
aprovados.forEach(nome => console.log(nome))

// outra forma
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)