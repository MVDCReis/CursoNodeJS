let dobro = function (a){
    return 2 * a
}

//função arrow sempre são anonimas se caso precisar chamar dnv deposite elas em variaveis
dobro = (a) =>{
    return a * 2
}
//funções de uma linha só é só fazer assim não precisa do retorno ele é implicito 
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function(){
    return 'OLÁ' 
}

ola= () =>'Olá'//retorno se torna implicito
ola= _=>'Olá' //possui param ( só mais uma maneira de chamar arrow function)
console.log(ola())