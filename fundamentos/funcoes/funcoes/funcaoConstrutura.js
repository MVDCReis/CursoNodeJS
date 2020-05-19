/**
 * Bem em JavaScript function servem de molde para os obj
 * Obj são instanciados através dela
 * Mas os dados continuam pertencendo ao obj
 */
function Carro(velocidadeMaxima = 200, delta = 5){
     //atributo privado
    let velAtual = 0

//metodo publico
//a palavra this é responsavel de tornal visivel fora de sua funcao
    this.acelerar = function() {
        if(velAtual + delta <= velocidadeMaxima){
            velAtual += delta
        }else{
            velAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velAtual
    }

}

const uno = new Carro(360,50)
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log('Uno de firma bolado saindo com ' + uno.getVelocidadeAtual())

const ferrari = new Carro
for (let index = 0; index < 20; index++) {
    ferrari.acelerar()
}

console.log('Ferrari passando mal atrás à ' + ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof uno)