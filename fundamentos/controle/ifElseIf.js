Number.prototype.entre = function (incio,fim){
     return this >= incio && this <= fim
}

const imprimiResultado = function (nota){
    if ( nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if (nota.entre(7,8.99)){
        console.log('OK')
    }else if (nota.entre(5,6.99)){
        console.log('Dá pra ir')
    }else if (nota.entre(3,4.99)){
        console.log('Burro')
    }else if (nota.entre(0,2.99)){
        console.log('Animal')
    }
    console.log('fim')
}

imprimiResultado(1)
imprimiResultado(9)
imprimiResultado(8)
imprimiResultado(4)