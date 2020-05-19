console.log(soma(5,2))
//function declaration
/**
 *  é visto mesmo pelo condigo feito antes
 */
function soma (x,y){
    return x+y
}

//function expression
/**
 * ja no caso nas function expression 
 * só podem ser utilizadas apos sua declaração 
 */
const sub = function (x,y) {
    return x - y
}
console.log(sub(2,1))
//named function expression
/**
 * o mesmo é valido para named
 * a unica vantagem se usar uma named é no debug
 * da para ver em qual função está
 */
const mult = function mult(x,y) {
    return x * y
}
console.log(mult(5,5))