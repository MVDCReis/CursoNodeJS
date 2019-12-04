//boolean em node.js aceita varias coisas como verdadeiro e falso
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo) // !! comprara o valor como boolean

console.log('os considerados verdadeiros...')
console.log(!!3)// numeros difenrentes de 0 são considerados verdadeiros
console.log(!!-1)
console.log(!!' ')//strings se não estão vazias ou null são consideradas true
console.log(!![])//mesma coisa
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('as falsiane...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)// NaN not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para acabar...')

console.log(!!(''||null||0||'acho que ia dar false. ACHOU ERRADO')) 
// no caso de vocÊ comprar um monte de false mas se tiver um verdadeiro ele vai ser o retorno

let nome = ''
console.log(nome||'Se nome igual a false ele usa o que é true vulgo isso aqui')//porém se a variavel recebeu algo imprimi a variavel