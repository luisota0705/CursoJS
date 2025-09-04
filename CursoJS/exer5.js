// Importa o módulo 'readline' para ler dados digitados pelo usuario no terminal
const readline = require("readline");

// Criar a interface de leitura (entrada e saida de dados)
const rl = readline.createInterface({
    input: process.stdin,  //define que a entrada será o teclado
    output: process.stdout  // define que a saida sera o console

});

// Faz uma pergunta ao usuario
rl.question("digite o numero: ", (resposta) => {
    // Converte a resposta (que vem com texto) para número
    const numero = Number(resposta);

    // Estrura if/else para verificar se é maior ou menor/igual a 5
    if (numero > 5) {
        console.log("O número é maior que 5");
    } else {
        console.log("O número é menor ou igual a 5");
    }

    // fecha a interface de leitura (importante para encerrar o programa)
    rl.close();
});