function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho ^ trabalho2) modo de se comprar com porta XOR 
    // modo a inverter o que recebe
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // oprador unario 

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}
 
console.log(compras(true, true))
console.log(compras(false,true))

console.log(compras(true, false))
console.log(compras(false,false))