// bem no geral é uma forma de pegar algo de algum objeto ou estrutra como array
// quando se trata de objetos se usa {} pois para fazer o objeto se usa {}
// e quando se é um array [] pelo mesmo motivo anterior

const pessoa ={
    nome: 'O Bruxo',
    apelido: 'Dibraudinho',
    abilidades:{
        dibre: 'Elástico',
        role: 'ALEATÓRIO'
    }
}

//estrutura do destructuring
const {nome, apelido} = pessoa
//usando o destructuring pode se chamar atributos do objeto ou array e etc direto
// bem na real esse é o intuito de utilizalo
console.log(nome, apelido)

const {nome: n, apelido: a} = pessoa
//bem o : n é serve para atribuir um determinado valor a outra variavel assim não ficando preso aos
// nomes originais das variaveis 
console.log(n, a)

//é possivel setar novos dados desde que o eles respeitem os já existentes
const { nome: j, vulgo = 'Ronaldinho'} = pessoa
console.log(j, vulgo)

//Contundo mas não o mais importante não passe um dado que não existe na estrutura antes de 
//ter passado um já existente
