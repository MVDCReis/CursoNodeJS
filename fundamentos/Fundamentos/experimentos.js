let a = 3

global.b =123

this.c = 456
this.d = false
this.e ='test'

console.log(a)
console.log(global.b)

console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel de fdp: sem var ou let!
abc = 3 //nunca faça está merda!
console.log(global.abc)

