let jogos = [
  "Minecraft",
  "free fire",
  "The last of us",
  "Subnautica",
  "Among us"
];

let procurarJogos = prompt("Digite o nome do jogo que deseja buscar:");

if (procurarJogos === null || procurarJogos.trim() === "") {
    console.log("A busca foi cancelada ou enviada em branco.");
} else {

    let jogoEncontrado = jogos.find(jogo =>
        jogo.toLowerCase().includes(procurarJogos.toLowerCase().trim())
    );

    if (jogoEncontrado) {
        console.log("Jogo encontrado: " + jogoEncontrado);
    } else {
        console.log("Nenhum jogo encontrado com esse nome.");
    }
}