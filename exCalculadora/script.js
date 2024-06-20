let num1 = Number(prompt('Digite um numero'));
let num2 = Number(prompt('Digite outro numero'));
let opcaoCal = Number(prompt('Digite qual conta numerica deseja'));
let somaNumeros = 0;

switch(opcaoCal){
    case 1:
        console.log('Escolheu operação somar');
        console.log(somaNumeros = num1 + num2);
        break;
    case 2:
        console.log('Escolheu operação subtrair')
        console.log(somaNumeros = num1 - num2);
        break;
    case 3:
        console.log('Escolheu operação multiplicar')
        console.log(somaNumeros = num1 * num2);
        break;
    case 4:
        console.log('Escolheu operação dividir')
        console.log(somaNumeros = num1 / num2)
        break;
    default:
        console.log('Opção invalida.')

}



