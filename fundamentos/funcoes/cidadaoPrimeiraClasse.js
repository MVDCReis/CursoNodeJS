//Função em JS  é Fist-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1(){} // caso não chame o return de forma explicita sempre é retornado undefind

//Armazenar em uma variáel
const  fun2 = function() {} //se eu chamar a const passando os () eu invoco a função
                            // se eu passar como parametro ou usar vai como usar a func

//Armazenar em um Array
const array = [function(a,b){return a+b},fun1,fun2] //funcao é igual qualquer dado 
console.log(array[0](2,3))

//Armazenar no objeto
const obj = {}
obj.falar = function() {return `opa`}
console.log(obj.falar())

//passar função como param para função
function run (fun){
    fun()
}
run(function (){console.log('Executando')})

//Uma função pode retornar uma função ou conter uma
function soma (a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma (2,3)(4)
const daPraContinuarDps = soma(2,3) // entao da para chamar função a partir de const
daPraContinuarDps (4) // e realizar a outra função dps de realizar a primeira