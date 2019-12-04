function teste1 (num){
    if (num >7)
        console.log(num)
     //dado em vista que js é um teco de java ainda é valido o if de uma linha não necessitar de {}
    console.log('Final')
}

teste1(2)
teste1(8)

function teste2(num){
  if(num > 7);{ // ; não use em estruturas de controle não use pois mata a validacao 
      console.log(num)
  }

}
teste2(6)
teste2(8)