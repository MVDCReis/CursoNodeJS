/**
 * O contexto Lexico tem como pauta saber onde a function foi declarada
 * O exemplo abaixo demonstra isso
 * ao chamar MinhaFuncao no exec o contexto de minhaFuncao é o geral 
 * então ela ve a const valor como Global
 * mesmo que ela seja chamada em outro lugar com variaveis do mesmo nome
 * o contexto levado em conta é o da declaração da função
 */

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor= 'Local'
    minhaFuncao()
}
 
exec()