function Pessoa(){
    this.idade = 0 // cria um tributo na entidade Pessoa que já posso utilizar direto de dentro
    
    const self = this
    setInterval(function (){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}
new Pessoa
/**
como já dito antes no curos posso chamar mais funções de funções mas também passar como paramentro
ou até mesmo como agora fazer a função anonima direto no parametro
e para que a o idade não se perca utilizando o bind 
a outra maneira e criando a const self ou qualquer outro nome que é this sendo assim o this 
sempre aponta para o objeto assim fazendo que não se perca pois self sempre aponta para o obj
assim utilizando o self como um this que sempre se refere a ao obj em qual foi declarado 
*/