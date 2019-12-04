function Pessoa (){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa

/**
 * Arow Function não perdem o contexto do this, pois elas respeitam aonde foram criadas
 * sendo assim não perdem o apontamento do this.s
 */