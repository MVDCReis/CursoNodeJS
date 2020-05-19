let comparaComThis = function (param){
    console.log(this==param)
}
comparaComThis(global) // como já dito antes funções normais o this fica apontado pra global

const obj =  {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//já quando se aponta com o bind o this se torna o obj 
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this==param)
comparaComThisArrow(global)// já em arrow function como no ex anterior o this da arrow funct
// aponta para onde ela foi criada
comparaComThisArrow(module.exports)// por isso this é == o arquivo do modulo 