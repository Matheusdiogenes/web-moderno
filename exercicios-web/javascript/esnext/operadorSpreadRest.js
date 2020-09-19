// usar spread com obj
const funcionarios = {nome: 'Maria', idade: 21}
const clone= {ativo: true, ...funcionarios}

console.log(clone);
// usar spread com array
const sala = ['Marcos', 'Jonny']
const novosAlunos = ['Octavia',...sala,'Bruna']
console.log(novosAlunos);
