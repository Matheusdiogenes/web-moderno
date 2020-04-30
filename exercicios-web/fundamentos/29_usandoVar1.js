//O var é visivél fora do bloco/escopo em que foi declarada, a não ser se você declarar dentro de uma função
//quando se cria uma variável fora de uma função ela é global
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)