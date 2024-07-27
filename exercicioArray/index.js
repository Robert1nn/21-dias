// let num = 0;
// let arrays = [];
// let indiceArrays = 0;

// num = prompt("Digite o numero positivo") 

// for (let i = 0; i <= 10; i++) {
//     arrays = prompt("Digite os numeros aqui ")
//     indiceArrays++

//     console.log("Os indices são: " + indiceArrays)
// }

// let array = [];
// let indiceArrays = [];
// let contaddorIndice = 0;

// const numProcurado = parseInt(prompt("Digite o numero a ser procurado"))

// for (let i = 0; i < 10; i++) {
//     const elemento = parseInt(prompt(`Digite o elemento ${i + 1}: ` ));
//     array[i] = elemento

// }

// for (let i = 0; i < 10; i++) {
//     if (array[i] === numProcurado)
//        indiceArrays[contaddorIndice] = i;
//     contaddorIndice++;
// }

// console.log(`o numero ${numProcurado} foi encontrado nos indices: ${indiceArrays}`)

// let numeros = 0;
// let array = [];
// let arrayInvertido = [];

// for (let i = 0; i < 5; i++) {
//     numeros = parseInt(prompt("Digite o " + (i + 1) + "° array"))
//     array[i] = numeros
// }
// console.log("O array original fica assim: " + array)

// let contadorArray = 4;
// for (let i = 0; i < 5; i++) {
//     arrayInvertido[i] = array[contadorArray]
//     contadorArray--;

// }
// console.log("A decrementação do array fica assim: " + arrayInvertido)

let array = [];
let arrayInvertido = [];
let numerosInserir = parseInt(prompt("Quantos numeros deseja inserir no array? "));

for (let i = 0; i < numerosInserir; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "° número"))
    array[i] = numero
}

console.log("O array prenchido foi: " + array);

let contador = numerosInserir - 1;

for (let i = 0; i < numerosInserir; i++) {
    arrayInvertido[i] = array[contador]
    contador--;

}

console.log("O array ao contrario fica assim: " + arrayInvertido)


















