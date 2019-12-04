function imprimirNota(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log('Maroto')
            break
        case 9:
        case 8:
            console.log('Ligera')
            break
        case 7:
        case 6:
            console.log('Deu para passar') 
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
                console.log('Hoje NÃO!')
        default:
            console.log('Digitou nada com nada irmão')
    }
}
imprimirNota(7)
imprimirNota(10)
imprimirNota(-5)