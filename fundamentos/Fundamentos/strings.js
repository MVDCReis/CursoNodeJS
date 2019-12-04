// strings podem ser delimitadas podem ser delimitadas "", '' e clases 
const circo= "SOLED"

console.log(circo.charAt(4))
console.log(circo.charAt(5))//invés de falar javalang na sua cara ele só devolve um vazio :P
console.log(circo.charCodeAt(0))// ele associa o codigo 
console.log(circo.indexOf('L'))// fala qual é posição da letra 

console.log(circo.substring(1))// imprime apenas a sub string daquela posição
console.log(circo.substring(0,3))// imprime do caractere na pos 0 a 3

console.log(circo.replace(3,'X'))// troca o oc caractere 3 e troca pelo valor na frente

console.log('Marcos,Dieguito,Ivão,Henson'.split(','))
