class Pessoa{
    //construtor da classe
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é  ${this.nome}`)
    }
}
//instanciando pessoa
const p1 = new Pessoa('L')
p1.falar()


function Pessoas(nome){
   
    this.falari = function(){
    console.log(`Eu tenho a minha funcao atribuida a mim ${nome}`)
    }
}

const lenda = new Pessoas('Ronaldinho')
lenda.falari()