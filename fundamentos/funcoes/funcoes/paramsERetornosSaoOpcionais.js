function area (largura,altura){
    const area = largura * altura
    if (area>20){
        console.log(`valor acima do permitido ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2,2))//chamando a função de forma correta tendo o retorno
console.log(area(2))//chamando a função dando parametros a menos não obtendo retorno
console.log(area())//mesmo caso anterior chamando função sem parametro algum
console.log(area(2,3,4,4,15))//também é aceito se passar mais valores do que tem no contrato
//mas no caso anterior ele apenas utiliza os 2 primeiros pq são os necessários
console.log(area(5,5))//tendo os 2 retornos
