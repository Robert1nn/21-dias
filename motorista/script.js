let nome
let idade
let cartaMotorista = false
let carro = false

nome = prompt('Digite seu nome')
idade = prompt('Digite sua idade')
let opcaoCarta = prompt('Tem carata de motorista? (s/n)')

if (opcaoCarta == "S") {
    cartaMotorista = true
}

let opcacaoCarro = prompt('Voce tem carro? (s/n)')
if (opcacaoCarro == "S") {
    temCarro = true
}

if (idade < 18 || !cartaMotorista ) {
    console.log(nome + ", não pode dirigir")
} else if (idade >= 18 && !cartaMotorista &&  !temCarro) {
    console.log(nome + ", você pode dirigir mas não tem carro")
} else {
    console.log(nome + ", você será o motorista")
}



