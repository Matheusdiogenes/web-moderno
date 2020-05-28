const times = {
    AthleticoPR: {
        jogos: 0,
        vitorias: 0,
        derrotas: 0,
        empates: 0,
        golsPro: 0,
        golsContra: 0,
        saldoGols: golsPro - golsContra,
        cartoesVermelhos: [],
        cartoesAmarelos: [],
        pontos: 0,
        cantos: {
            media: 0,
            mediaCasa: [],
            mediaFora: [],
            cantos10ht: []
        }
    },
    getCantos(){ return this.cantos }
}
console.log(times.AthleticoPR.pontos);
