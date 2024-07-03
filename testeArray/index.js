let nomes = [];
let posicoesArray = 0;
let continuar = true;

while (continuar) {
let nomesInseridos = prompt("Digite os para ser inserido ")
nomes = [posicoesArray] = nomesInseridos;

console.log(nomesInseridos)

let desejaContinuar = prompt("Deseja continuar ainda? (1/2)")
    if (desejaContinuar != "1") {
        continuar = false;
    }

    posicoesArray++;
}