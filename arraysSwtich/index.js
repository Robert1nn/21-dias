let senhas = [];
let nomes = [];
let continuar = true;

let contador = 0;


while (continuar) {

    let opcoes = prompt("O que deseja fazer? (1 - cadastrar / 2 - Fazer login / 3 - Excluir / 4 - Encerrar o programa");

    switch (opcoes) {
        case "1":
            nomes[contador] = prompt("Digite seu nome ");
            senhas[contador] = prompt("Digite sua senha ");
            break;
        case "2":
            let nome = prompt("Digite seu nome de usuario para login");
            let senha = prompt("Digite sua senha para login");
            let loginValido = false;

            for (let i = 0; i < nomes.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]) {
                    loginValido = true;
                }
                if (loginValido) {
                    alert("Logado com sucesso, BEM VINDO !!")
                } else {
                    alert("Erro, login ou senha incorretos !!")
                }
                break;
            }
        case "3":
            let nomeExcluir = prompt("Qual login deseja excluir?");
            let senhaAux = []
            let nomeAux = [];
            let contadorAux = 0;

            for (let i = 0; i < contador; i++) {
                if (nomeExcluir == nomes[i]) {
                    alert("Login excluido com sucesso !!")
                } else {
                    nomeAux[contador] = nomes[i];
                    senhaAux[contador] = senhas[i];
                    contadorAux++;
                }

                nomes = nomeAux
                senhas = senhaAux;
                contador--;
                break;
            }

        case "4":
            continuar = false;

        default:
            console.log("Opção invalida, digite novamente outra opção")
            break;
    }
}