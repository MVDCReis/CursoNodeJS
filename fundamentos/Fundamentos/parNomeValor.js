// par nome / valor

const lema = 'Faça o seu sem esperar do outro' // contexto léxico 1 (vulgo onde foi definido a variavel 


//a variavel lema é possivel ser reutilizada pois o contexto léxico que ela se encontra é outra então
//o valor retornado é dado pelo identificador e também seu contexto léxico
function exec(){

    const lema ='Vida cobra e cobra caro'
    return lema
}


//objetos são grupos alinhados de tipo(pares / chaves) nome / nomes  
const Zica ={
    vulgo: 'Reis',
    idade: '21',
    ferro: '762',
    enderecao:{
        rua: 'Rua da africa',
        barraco:'12'
    }
}
console.log(lema)
console.log(Zica)
console.log(exec())