const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao = 8.891
const total = avaliacao1 * peso1 +avaliacao * peso2
const media = total / (peso1+peso2)
// vamos lá então da para chamar os metodos do tipo a partida da variavel 
console.log(media.toFixed(2)) //toFixed serve para fixar quantos numeros a virgula vão aparecer 
console.log(media.toString(2)) //To Sting com 2 chama  
console.log(typeof media)