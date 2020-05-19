//demonstrando a diferenças de usar callBack ou não
//na moral mesmo usar a de callback economiza tempo 
//é mais clean use callback quando der 
const notas = [7.7, 5.5,6.5,8.8,0.0]

//Sem callback 
let notasBaixa = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixa.push(notas[i])
    }
}
console.log(notasBaixa)

//Com callBack 
const notasBaixas = notas.filter(nota => nota < 7)

console.log(notasBaixas)