function inteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1


do{
    opcao = inteiroAleatorioEntre(-1, 10)
    console.log(`O numero sortido foi ${opcao}`)// bem fica a dica só da para usar o ${} se estiver entre aspas
}while (opcao != -1)

console.log(`acabou`)