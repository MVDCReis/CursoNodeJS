const notas = [6.7,7.5,5.5,6.3,8.1,7.3]

for (let i in notas){ //bem o for percorre os indicies do vetor 
    console.log(i,notas[i])
}

const pessoa = {
    nome:'Ana',
    sobrenome:'Carolina',
    idade: 29,
    peso: 60
}

for(let atributo in pessoa){ //sempre usa o let antes do valor para ser visto só no escopo do bloco
    console.log(`${atributo} = ${pessoa[atributo]}`)
} //basicamente a mesma coisa mas ao invés de indicie do vetor percorre os atributos da pessoa