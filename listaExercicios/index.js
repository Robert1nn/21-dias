let arrayAnos = [];
let arrayModelos = [];
let arrayValores = [];
let continuar = true;
let contador = 0

while (continuar) {
    let nomeCarro = prompt("Digite o nome do carro: ");
    let modelo = prompt("Digite o modelo do carro: ");
    let anoCarro = prompt("Digite o ano do carro: ");
    let valorCarro = prompt("Digite o valor do carro: ");

    arrayModelos[contador] = nomeCarro;
    arrayAnos[contador] = anoCarro;
    arrayValores[contador] = valorCarro;

    contador++

    const opcao = prompt("Deseja continuar inserindo? (s/n)")
    if (opcao === "s") {
        continuar = true;
    } else {
        continuar = false;
    }

}

console.log("Carros cadastrados")
for (let i = 0; i < arrayModelos.length; i++) {
    console.log(arrayModelos[i] + " - " + arrayAnos[i] + " - " + arrayValores[i])
}









