//Clousere é o escopo criado quando uma function é declarada
//Esse escopo permite a função acessar e munipular variaveis externas

//Contexto Léxico SAINDO DA JAULA

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
//é printado local pos o contexto Lexico da dentro da func fora
//onde se tem um x 
console.log(minhaFuncao())