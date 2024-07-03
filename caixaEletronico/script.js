let saldo = 1000;
let maiorValorInserido = 0;
let somarValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = true; 

do {
    const nome = prompt('Digite seu nome');
    const cpf = Number(prompt('Digite seu cpf aqui'))
    const valorAdd = Number(prompt('Digite um para deposito'))
    const saque = 1;
    const deposito = 0;
    
    if (saque == 1) {
        saldo = saldo - valorAdd;
    } if (deposito == 0) {
        saldo = saldo + deposito;
    }

} while() {

}