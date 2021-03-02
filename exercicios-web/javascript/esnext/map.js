const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react);
console.log(tecnologias.get('react'));
console.log(tecnologias.get('react').framework);

const chavesVariadas = new Map([
    [function (){}, 'funcao'],
    [{}, 'objeto'],
    [123, 'numeros']
])

chavesVariadas.forEach((ch, val) => {
    console.log(ch, val);
    
})

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log( chavesVariadas.size);
