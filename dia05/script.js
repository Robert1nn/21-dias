let idade = Number(prompt('Digite sua idade'))

switch (true) {
    case idade >= 18:
        console.log ('voce eh maior de idade')
        break;
    case idade < 18:
        console.log('você eh menor de idade')
        break;
    case idade < 0:
        console.log('opção invalida')
        break;
}
