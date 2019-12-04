const pessoa = {
    saudacao: 'SALVE QBRADA',
    
    falar() {
        console.log(this.saudacao)
        
    }
}

pessoa.falar()
const falar = pessoa.falar()
console.log(falar)
const falarDePessoa = pessoa.falar.bind(pessoa)
/**
 * muleke do mal bem o bind assima é criminoso ele funciona assim o obj que tu colocar dentro dali 
 * vai ser onde ele vai tentar resolver o método e é por isso em um ele chora e nesse ele faz
 * topzera tilmais
 */
falarDePessoa()

