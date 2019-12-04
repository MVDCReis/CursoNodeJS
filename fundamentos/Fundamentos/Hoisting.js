//no caso do var rola o hoisting(vulgo içada) ele move o a declaração da variavel para o topo
console.log('a =', a)
var a = 2
console.log('a =', a)


// porém isto não acontece com o let
console.log('b =', b)
let b = 2
console.log('b =', b)

