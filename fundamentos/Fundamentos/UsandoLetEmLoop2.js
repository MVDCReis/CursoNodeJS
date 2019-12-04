// declarando array

const funcs = []

for(let i = 0; i<10;i++){
    funcs.push(function(){
        console.log(i)

    })
}

// por let respeitar o valor que respeita o valor no qual a variavel foi criada diferente de var
// que pode ser alterada não respeitando os blocos

funcs[2]()
funcs[8]()