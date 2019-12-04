function imprimirSoma(a, b){
console.log (a + b)

}
imprimirSoma(8000,1)

// funcao com retorno 


// O b =1 definine que o valor de b sera 1 se nenhum valor for passado para a funcao
function soma (a,b = 1) {

    return a + b
}

console.log(soma(5,5))
//valor passado foi 6 que corresponde a A e b é pré definido direto na funcao  :v
console.log(soma(6))