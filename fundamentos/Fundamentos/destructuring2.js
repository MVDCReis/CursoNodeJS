// Array que seu primeiro elemento como setado 10
// então a pelo destructuring 
const [a] =[10]
console.log(a)
// cria um array porém com espaços em branco sendo o nome da virael e atribuindo 0 ao n6
const [n1, ,n3, ,n5,n6=0] = [ 10 , 7 , 9 ,8 ]
//os valores correspondendo as os espaços sem nome são preenchidos pois ele vai na ordem 
console.log(n1,n3,n5,n6)

//crianto um array dentro de outro array ignorando o 1 valor do 1 array e o1 valor do 2 array
//atribuindo o valor a nota e ignorando a atribuição de um valor ao primero elemento
//o primero elemento que é ignorado recebe o 1 array e depois o outro array preenche o array
//que está na estrutura
const [,[, nota]] = [ [, 8, 8], [9, 6, 8] ]
console.log(nota)