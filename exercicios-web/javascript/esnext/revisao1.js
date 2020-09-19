// var e let 
{
    var a = 1
    let b = 2
    console.log(b);

}
console.log(a);

// Template String
const produto = 'iPad'
console.log(`${produto} 
é 
caro`);

//Destructuring
//Tirando da estrutura str
const [l,e, ...tras] = 'Cod3r'
console.log(l, e, tras);

//Tirando DA estrutura de um array
const [x, , y] = [1,2,3]
console.log(x, y);

const {idade: i , nome} = {idade:19 , nome:'Raquel'}
console.log(i, nome);
