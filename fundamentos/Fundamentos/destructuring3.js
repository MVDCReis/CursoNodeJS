//criando um funçao com paramentro que requer um objeto e que já tem um valor padrão
// porém é necessário passar um objeto mesmo que não tenha um dos atributos
//
function rand({min =0, max=1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor) 

}
//criando objeto e passando para a função
const obj = {min:50, max:360}
console.log(rand(obj))
//Usando o destructuring passando um paremtro só e resolvevendo o outro pelo atributo padrão
console.log(rand({min: 955}))
//Passando apenas um obj sem nada que é resolvindo usando os paramentros padrões
console.log(rand({}))
//caso passar o de baixo ele vai dar como undefined ou null pois não existe um objeto sendo passado
//para que o node consiga resolver
//console.log(rand())