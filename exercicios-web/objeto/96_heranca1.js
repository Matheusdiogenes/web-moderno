//Um obj em JS tem uma referência para seu prototipo
const ferrari = {
    modelo : 'F40',
    velMax : 324
}

const volvo = {
    modelo : 'V40',
    velMax : 200
}
console.log(ferrari.prototype); // prototype está definido apenas para funções

console.log(ferrari.__proto__);//Consigo ver quem é o prototipo desse obj, o obj pai
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto(){ }
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);