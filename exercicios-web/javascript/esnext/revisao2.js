// Arrow funcion
const f = (a, b) => a+b

// Arrow funcion (this)

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//operador rest

function total(...num){
    let total = 0
    num.forEach( n => total+=n)
    return total
}
console.log(total(1,2,3,4));
