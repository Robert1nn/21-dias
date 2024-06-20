let opcao = Number(prompt('digite uma opção'));
let valorGasolina = 0;
let valorAlcool = 0;
let alcool = 3;
let gasolina = 5;

switch(opcao) {

    case 1: 
        console.log('Voce escolheu gasolina');
        valorGasolina = prompt('digite o valor que voce deseja abastecer')
        console.log(valorGasolina = valorGasolina / gasolina)
        console.log(valorGasolina)
        break;
    case 2: 
        console.log('Voce escolheu alcool');
        valorAlcool = prompt('digite o valor que voce deseja abastecer')
        console.log(valorAlcool = valorAlcool / alcool)
        console.log(valorAlcool)
        break;
    case 3: 
        console.log('Pneus calibrados com sucesso')
        break;    
    default: 
        console.log('Opcão invalida')   
}










