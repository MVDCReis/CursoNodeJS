var numero =1
{
    // se uma variavel já foi declarada com aquele nome porém foi sobreescrita em um escopo mais
    // profundo é utilizado 

    // variaveis do tipo var tem seu escopo como global e de funçao
    // e  as de tipo let tem escopo global, função e de bloco 
    let numero =9
    console.log('dentro', numero)
}
console.log('fora ',numero)