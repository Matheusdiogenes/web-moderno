const person = {
    name : "Will",
    age: 51,
    eyecolor: "blue",
    inutiu: false,
    nameAge : function(){
        return "O "+this.name+" Tem "+this.age +" anos"
    }
}
delete person.inutiu
person.age = 21
person.nationality = "English"

console.log(person.nameAge()) 
Object.defineProperty(person,"name", {value: "Jones"})

console.log(person);

{
// console.log(person['name'])
//person.name = "ze"
// for( x in person){
//     console.log(person[x]);
    
// }
}
