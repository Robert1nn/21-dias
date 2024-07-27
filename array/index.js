// let arrayFibonacci = [];
// let numSequencia = parseInt(prompt("Digite um numero inteiro positivo"))
// let numLimiteSequencia = parseInt(prompt("Digite até onde a sequencia ira ir"))

// arrayFibonacci[0] = numSequencia - 1;
// arrayFibonacci[1] = numSequencia;

// for (let i = 2; i < numLimiteSequencia; i++) {
//     arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
// }

// console.log("A sequencia ficou assim: " + arrayFibonacci)

let arrayNomes = [];
let arrayNotas = [];
let continuar = true;
let somaTotalSala = 0;
let contador = 0;

while (continuar) {
    let nomes = prompt("Digite o nome do : " + (contador + 1) + " ° aluno")
    let notas = parseFloat(prompt("Digite sua nota:"))

    arrayNomes[contador] = nomes;
    arrayNotas[contador] = notas;
    contador++

    const opcao = prompt("Deseja continuar a inserir as notas? (s/n)")

    if (opcao === "s") {
        continuar = true;
    } else if (opcao === "n") {
        continuar = false;
    }
}

for (let i = 0; i < arrayNomes.length; i++) {
    console.log(arrayNomes[i] + " - " + arrayNotas[i]);
}

for (let i = 0; i < arrayNotas.length; i++) {
    somaTotalSala =+ arrayNotas[i];
}

let mediaGeral = somaTotalSala / arrayNomes.length;

console.log("A soma das notas foi: " + somaTotalSala);
console.log("A media geral do turma foi: " + mediaGeral);



