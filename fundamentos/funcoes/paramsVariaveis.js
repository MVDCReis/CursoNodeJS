function soma() {
    let soma = 0
    for (i in arguments){
        soma+= arguments[i]
    }
    return soma 
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,1.2))
console.log(soma(1.1,2.2,"teste"))
console.log(soma('a','b','c'))
/*
Bem esse exemplo serve para a demonstração de como utilizar arguments
arguments é um array que toda função tem mesmo se está vazio
mas graças a flexibilidade do js podemos acessalo e ao envialo de forma 'errada'
podemos utilizar para realizar funções 
e só para anotação se função tem retorno ou não tanto faz para a declarar 
quando ela for retornar algo ela tem um return e é isso ai  

e o porque de somar até as strings com o number é pq estou usando = não ===
ai o fato dele ser um number é ignorado e é tratado como string
*/
function role(){

}