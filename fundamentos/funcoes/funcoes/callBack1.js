// função de callback nada mas é uma função que executa após algum evento
//como no exemplo abaixo o evento é o loop do forEach
//e a função de call back nada mais é que a imprimir

const jogadores = [ "Ronaldinho","Gigs","Lampard"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

jogadores.forEach(imprimir)
jogadores.forEach((jogadores)=>console.log(jogadores) )