let nome = prompt('Digite seu nome');
let idade = (prompt('Digite sua idade aqui'));
// let peso = (prompt('Digite seu peso'));
// let altura  = (prompt('Digite sua altura'));
// let profissao = prompt('Digite sua profissão aqui');

// console.log("Olá " + nome + " você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "KG")

// if (idade > 18 ) {
//     console.log("Você está liberado para tomar umas geladas")
// } else {
//     console.log("Sem geladada pra você")
// }

// const idademeses = idade * 12;
// const idadeSemanas = idade * 52;
// const idadeDias = idade * 365;

// console.log("Idade em meses: " + idademeses)
// console.log("Idade em semanas: " + idadeSemanas)
// console.log("Idade em dias: " + idadeDias)

// let imc = 0;

// imc = peso / (altura * altura);

// console.log ("Seu nome imc: " + imc)

// if (imc < 18.5) {
//     console.log("Magreza")
// } else if (imc > 18.5 && imc <= 24.9) {
//     console.log("Normal")
// } else if (imc > 24.9 && imc < 30) {
//     console.log("Sobrepeso")
// } else if (imc > 30) {
//     console.log('Obesidade')
// }


let anoAtual = 2023;
let anoNasceu = anoAtual - idade;

console.log('O ano que você nasceu foi: ' + anoNasceu);

let anosVivido = anoNasceu;
let idadeAtual = 0;

console.log(prompt('Em que ano você nasceu? '));

for (let anosVivido = anoNasceu; anosVivido <= anoAtual; anosVivido++) {
    console.log(anosVivido + " - " + idadeAtual + " anos idade: ")
    idadeAtual++
}


do {
    let continuar = prompt(console.log(prompt("Deseja continuar? (s/n)")))
    let confirmar = "n"

} while (confitmar != "s") {
    nome = prompt('Digite seu nome novamente')
    idade = parseInt(prompt('Digite sua idade novamente aqui'))
    let salario = parseFloat(prompt('Digiye seu salário'))
    console.log("Olá, " + nome + "sua idade é " + idade + "seu salario " + salario);
    confirmar = prompt('As informações estão corretas? (s/n)')
}


let aumento = 0.015;
for (let ano = 1; ano <= 10; ano++) {
    let salarioAumento = salario * aumento;
    aumento *= 2;

    console.log("O aumento por ano é: " + salarioAumento)
}















