class aluno {
    nome;
    idade;
    areaAtuacao;

    constructor(nome, idade) {
        this.nome = nome;  // this.nome do construtor. " = nome " recebendo da declaração da clsse.
        this.idade = idade;

        apresentacao() {
            console.log("Ola, " + this.nome + " minha idade é " + this.idade + "e minha area de atuação é " + this.areaAtuacao)
        }
    }
}

console.log("========== cadastro de aluno =========")
let alunos = [];
let continuar = true;
let indexAluno = 0;

while (continuar) {
    let nome = prompt("Digite seu nome ");
    let idade = parseInt(prompt("Digite sua idade "));
    let aluno = new aluno(nome, idade)

    let areaAtuacao = prompt("Digite sua area de atuação ");
    aluno.areaAtuacao = areaAtuacao;

    alunos[indexAluno] = aluno;

    let desejaContinuar = prompt("Se deseja continuar aperte 1");

    if (desejaContinuar != 1) {
        continuar = false;
    } else {
        indexAluno++
    }



}

