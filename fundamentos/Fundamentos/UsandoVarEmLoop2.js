// declarando array

const funcs = []

for(var i = 0; i<10;i++){
    funcs.push(function(){
        console.log(i)

    })
}

// por var não respeitar o escopo de bloco ele apenas ira impremir o valor final de i

funcs[2]()
funcs[8]()