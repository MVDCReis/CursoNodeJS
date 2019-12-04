function inteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0


while (opcao != -1){
    opcao = inteiroAleatorioEntre(-1, 10)
    console.log(`O numero sortido foi ${opcao}`)// bem fica a dica só da para usar o ${} se estiver entre aspas
}

console.log(`acabou`)