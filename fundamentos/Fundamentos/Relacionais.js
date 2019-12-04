//verifica se o caracter é o mesmo 
console.log ('01)', '1' == 1)
//verifica se o tipo e o caracter é o mesmo
console.log ('02)', '1'=== 1)

//verifica se os caracteres são diferentes 
console.log ('03)', '2'!= 2 )
//verifica se os caracteres e o seu tipo são diferentes
console.log ('04)', '02' !== 2)

console.log('05)', 3 < 1)
console.log('06)', 3 > 1)
console.log('07)', 3 >= 2)
console.log('08)', 3 <= 2)


const d1 = new Date(0)
const d2 = new Date(0)
// compara endereços de memoria em ambos
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)

console.log('11)',d1.getTime() === d2.getTime()  )
console.log('12)',d1.getTime() == d2.getTime() )
console.log('13)', undefined == null )
console.log('14)', undefined === null)