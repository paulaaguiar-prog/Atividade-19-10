const senhaCorreta = "12345";
const limiteTentativas = 3;
let tentativas = 0;
let senhaDigitada = "";
let acessoLiberado = false;

while (tentativas < limiteTentativas && !acessoLiberado) {

    senhaDigitada = prompt("Digite a senha:"); 
    tentativas++;

    if (senhaDigitada === senhaCorreta) {
        acessoLiberado = true;
        console.log("Acesso liberado!");
    } else {
        console.log(`Tentativa ${tentativas}: senha incorreta.`);
    }
}


if (!acessoLiberado) {
    console.log("Acesso bloqueado!");
}
