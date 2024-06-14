let nome = prompt('Insira seu nome');
let idade = Number(prompt('digite sua idade'));

if(idade <= 22 && nome == "Roberto") {
    console.log('Seu nome é Roberto e você tetm 22')
}

if(idade <= 22 || nome == "ROberto") {
    console.log('Seu nome é Roberto e você tem 22 anos')
} else{
    console.log('seu nome não é roberto e voce nao tem 2 anos')
}