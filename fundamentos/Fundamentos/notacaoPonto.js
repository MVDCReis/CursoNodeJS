//javaScript também vai de se . ao invés de ,
console.log(Math.ceil(9.9))

const obj1={}
//Criando um atributo no objeto, serve também para acessar um atributo de um objeto
obj1.nome= 'Sou Ronaldo'
console.log(obj1.nome)

function Obj(nome){
    // this. serve para expor para fora do escopo da função ou variavel 
    this.nome = nome
    // e sim é possivel atribuir funções  e as expondo para fora com this.
    this.exec = function(){
        console.log('Ronaldo é gooool oooo')
    }
}

const obj2 = new Obj('Fenomeno')
const obj3 = new Obj('Joga muito no Curintia')
console.log(obj2.nome)
console.log(obj3.nome)
//Através do this é possivel atribuir além de atributos também pode atribuir funções
obj3.exec()