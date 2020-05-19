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

//ao se utulizar a factory o contesto lexico não se perde mesmo no browser 

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`M3U N0M3 3 ${nome}`)
    }
}

const p2 = criarPessoa('MC Z01 D3 G4T0')
p2.falar()