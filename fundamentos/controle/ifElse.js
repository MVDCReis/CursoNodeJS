const imprimimrResultado = function(nota){
    if(nota >= 6){
        console.log('Mas o desgraçado é um GENIO!')
    }else{
        console.log('Reprovado nego')
    }
}

imprimimrResultado(10)
imprimimrResultado(5)
imprimimrResultado('Não faça isso') // por ser fracamente tipado da ruim mas ele tenta