function rand ([min=0, max=1000]){
//bem essa é mais forma de se usar o destructing
//basicamente compara os valores e se min>max ele inverte os valores
//na real por vc ter tirado os valores vc tem 2 itens que vc ordena de forma diferente 
//em outro array topzera 
    if(min>max)[min, max] = [max, min]
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
console.log(rand([60,40]))
console.log(rand([942]))/*Por ter passado um unico valor a flutuação dos numeros sermpre estara entre
942 e 1000*/
console.log(rand([,15]))/*Bem deu para sacar que ele sempre completa o valor com valor que já está
no metodo vlw */ 