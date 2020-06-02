//aula131
console.log(this === global); //this -> module.exports
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis(){
    console.log('Detro de uma função...');
    console.log(this === exports);   
    console.log(this === module.exports);
    console.log(this === global);
}
logThis()