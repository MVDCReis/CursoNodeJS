// abaixo uma arrow function do qual o seu retorno é implicito
// o e operador ternario é ?  a condição dada é nota>=7
// caso true devolve a primeria condição caso falso a segunda 
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' 

console.log(resultado(7.2))
console.log(resultado(6.2))