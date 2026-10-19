let notas = [8, 7, 9, 4, 6, 10];

let precisaRecuperacao = notas.some(function(nota) {
    return nota < 5;
});

if (precisaRecuperacao) {
    console.log("Existe pelo menos um aluno que precisa de recuperação.");
} else {
    console.log("Nenhum aluno possui nota abaixo de 5.");
}