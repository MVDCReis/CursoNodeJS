// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a + b
 } 

 console.log(soma(7,3))

 // Arrow function com retorno implicito, é dado o nome de implicito pq o return é ja dito na declaração
 //     da arrow function neste caso o return é a-b caso não retornar nada o resutado é undefined
 const subtracao = (a,b) => a - b
 console.log(subtracao(2,4))