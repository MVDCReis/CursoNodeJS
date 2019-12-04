const nome = 'Ronaldinho'
const concatenacao = 'O melhor de todos '+ nome+'!'
const template=`
    O melhor de todos 
    ${nome}!`  // Para poder escrever assim e ser impresso dessa maneira tem que usar crase
    //${varaivel} é assim que se chama uma variavel em um template.

console.log(concatenacao,template)

//expresoes...
console.log(`1+1 = ${1+2}`)

const up = texto => texto.toUpperCase() //criando uma função Arrol ainda vai ser melhor explicado
// mas até então oque deu para ver é que quando se fazer a variavel e usa.
console.log(`Arol ${up('o monstro cresceu')}`)