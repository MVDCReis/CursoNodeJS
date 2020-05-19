function getPreco(imposto = 0, moeda='R$'){
    return `${moeda} ${this.preco * (1 - this.desc ) * (1+imposto) }`
}

const produto = {
    nome : 'Chuteira',
    preco: 115,
    desc : 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.01
console.log(getPreco())