//function Factory recebendo parametros

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto:5
    }
}
console.log(criarProduto('RONALDINHO',8001))
console.log(criarProduto('Rooney',10)) 