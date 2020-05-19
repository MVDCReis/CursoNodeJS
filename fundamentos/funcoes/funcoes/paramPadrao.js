// 1° maneira de gerar um valor padrão 
    function soma1 (a,b,c) {
        a = a || 1 
        b = b || 1
        c = c || 1
        return a+b+c
    }
console.log( soma1(),soma1(3),soma1(1,2,3),soma1(0,0,0))
/* 
Na primeira maneura temos um problema que gera bugs pois ao passar 0,0,0 ele assume o valor como 1 
*/

// 2°, 3° e 4° maneira  para gerar um valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1 // se a for diferente de undefined  ele assume o valor de a se não 1 if ternario 
    b = 1 in arguments ? b : 1 // assim trabalhamos com o vetor de parametros passados usando a 2 posição d arguments e if ternario
    c = isNaN(c) ? 1 : c // neste caso comparamos de c é Not a Nuber NaN pois assim conferimos tipo e se foi preenchido corretamente
    return a + b + c
}

console.log(soma2(),soma2(3),soma2(1,2,3),soma2(0,0,0))

//utilizando forma a definir valor padrão do es2015
function soma3 (a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(),soma3(3),soma3(1,2,3),soma3(0,0,0),)