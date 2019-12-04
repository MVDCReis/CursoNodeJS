function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErro(e)
    }finally{
        console.log('Finally sempre roda caindo no catch ou não')

    }
}
const obj = { name : 'Ronaldo'}

function tratarErro(erro){
    //throw new Error('...')
    //throw 21
    //throw 'pode mandar um string'
    //throw true
    throw { nome:erro.nome,
            msg: erro.menssge,
            date: new Date
    } 
}
imprimirNomeGritado(obj)