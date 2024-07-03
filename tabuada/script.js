let numTabuada = Number(prompt('Digite o numero da tabuada '));

for (let i = numTabuada; i <= numTabuada + 2; i++) {
    console.log("Tabuada do numero: " + i)
    for (let j = 0; j <= 10; j++) {
        console.log(i + " X " + j + " = " + (i * j) )
    }
}