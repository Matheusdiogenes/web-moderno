//aula123
const moduloA = require('./moduloA') //caminho relativo
const moduloB = require('./moduloB')
console.log("Modulo A");
console.log(moduloA.bemVindo)
console.log(moduloA.maisUsado)
console.log(moduloA.ola);

console.log("Modulo B");
console.log(moduloB.apresenta());
console.log(moduloB.coeRapaziada);