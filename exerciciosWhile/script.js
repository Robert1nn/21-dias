let qtdMulheresAcimaDe7 = 0;
let qtdHomens = 0;
let maiorNotaHomens = 0;
let mediaGeral = 0;
let n = 1;

while (n <= 10) {
    nomeUsuario = console.log(prompt('Digite seu nome'));
    nota = console.log(parseInt(prompt('Digite sua nota aqui' + n)));
    sexo = console.log(prompt('Digite seu sexo do aluno aqui (M / F)'));

    if (sexo == "m") {
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota;
        }
        qtdHomens++;
    }

    if (sexo == "f" && nota > 7) {
        qtdMulheresAcimaDe7++;
    }

    mediaGeral =+ nota;
    n++;
}

mediaGeral = mediaGeral / 10;

console.log('A meida geral dos alunos foi: ' + mediaGeral);
console.log('a quantidade de homens cadastrado foi: ' + qtdHomens);
console.log('A quantidade de mulheres com nota acima de 7 foi: ' + qtdMulheresAcimaDe7);
console.log('A maior nota entre homens foi: ' + maiorNotaHomens);


