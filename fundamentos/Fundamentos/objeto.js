const prod1= {} //blz para fazer uns objeto em js é assim bem de boaça
    prod1.nome='FOTO DO SALVADOR XESUS'//como cria um atribuyo do objeto  
    prod1.preco= 8000.1 //fazendo mais um atributo, aproveitando da tipagem fraca
    prod1['Nome espacado'] = 7.0//e sim da prara criar atributos com nome espaçado. EVITE USAR

console.log(prod1)//para imprimir um objeto é só mandar ele ai e gg já da os atributos de boa

//Também dá para criar uns objetos assim 
const prod2={
    nome:'Caneca EXTREME GO HORSE',//se houver mais um atributo bota a , para declarar o próximo
    preco: 9.99
}
console.log(prod2)

const prod3={
    obj:{
        shazam:'Da para criar objetos dentro de objetos '

    }
}