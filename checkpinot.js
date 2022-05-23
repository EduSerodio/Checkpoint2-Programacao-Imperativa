//  Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

const valor1 = 2
const valor2 = 30
const valor3 = 15


 if (valor1 > valor2 && valor1 > valor3){

    console.log(valor1 + " é o maior número.")

} else if(valor2 > valor1 && valor2 > valor3) {

    console.log(valor2 + " é o maior número")
} else {
 console.log(valor3 + " é o maior número.")
}

if (valor1 < valor2 && valor1 < valor3){

    console.log(valor1 + " é o menor número.")

} else if(valor2 < valor1 && valor2 < valor3) {

    console.log(valor2 + " é o menor número")
} else {
 console.log(valor3 + " é o menor número.")
}



//2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)


function calculaIdade (numero) {
    if (numero >= 18 && numero <= 67) {
        return console.log("Você está apto para doar sangue!")
    } else {
        return console.log("Você não pode doar sangue!")
    }
}

calculaIdade(23)


/*4. Faça um programa para a leitura de duas notas de um aluno.  
A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
A mensagem “Aprovado com Distinção”, se a média for igual a 10;
A mensagem “Reprovado” se a média for menor de do que 7;*/

function calculaNota (nota1, nota2) {

    let media = (nota1 + nota2)/2

    if (media >= 7) {
        return console.log("Aprovado")
    } else if (media == 10) {
        return console.log("Aprovado com Distinção")
    } else {
        return console.log("Reprovado")
    }
}

calculaNota(5,10)