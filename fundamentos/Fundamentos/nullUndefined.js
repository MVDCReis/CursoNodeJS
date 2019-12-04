let valor //não inicializada
console.log(valor)

valor=null //sem valor porém inicializada
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)//undefined pois ainda não foi instaciado o valor
console.log(produto)//objeto vazio pois já existem mas não tem nada dentro

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // dá para fazer mas não faça essa mer..
console.log(!!produto.preco)
console.log(produto)
