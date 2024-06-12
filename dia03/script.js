let nome = '';
let idade = 0;
let altura = 0;
let peso = 0;

nome = prompt('Insira seu nome')
idade = prompt('Insira sua idade')
altura = prompt('Insira sua altura')
peso = prompt('Insira seu peso')

let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

console.log('Olá,' + nome + 'você tem ' + idade + 'anos, nasceu em ' + anoNasc + ', tem' + altura + 'de altura, pesa ' + peso + 'kg seu IMC é ' + imc);