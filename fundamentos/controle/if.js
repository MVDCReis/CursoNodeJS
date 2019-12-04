function soBoaNoticia(nota){
   if(nota >=7){
    console.log('Aprovado com ' + nota)
   } 
}

soBoaNoticia(6)
soBoaNoticia(8)

function seForTrue(valor){
    if(valor){//javascript já passa oque for e converte para true ou false
        console.log('É true da true ' + valor)
    }
}

seForTrue()//false
seForTrue(null) //false
seForTrue(undefined)// false
seForTrue(NaN) // false
seForTrue('') // vazio conta como false
seForTrue(0) // 0 é false
seForTrue(-1) // diferente de 0 já vale
seForTrue(' ')//  se não ta vazia já vale
seForTrue('?')// não importa o caractere
seForTrue([])// true pq n sei
seForTrue([1,2])// true 
seForTrue({})//objetos mesmo null é considerado true