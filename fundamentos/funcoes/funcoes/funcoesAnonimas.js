//const com function anonima atribuida
const soma = function(x,y){
    return x + y
}

//chamada da function sem nome   
const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b))
}

//chamando de forma implicita o soma
imprimirResultado(4,3)
//chamado imprimir passando o parametro soma
imprimirResultado(3,4, soma)
//chamando imprimir passando uma nova function
imprimirResultado(7,7, function(x,y){
    return x-y
})
//passando uma arrow function e não tira os parenteses pois tem mais de um parametro
imprimirResultado(5,6, (x,y) => x * y)
