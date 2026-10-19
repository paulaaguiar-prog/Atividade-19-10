let notas = [8, 7, 10, 4, 6, 9];

console.log("Notas originais:", notas);

let i = 0;

while (i < notas.length) {
    if (notas[i] < 0 || notas[i] > 10) {
        console.log("Nota inválida:", notas[i]);
    }
    i++;
}

notas.forEach(function(nota) {
    console.log("Nota:", nota);
});

if (notas.includes(10)) {
    console.log("A turma possui nota 10.");
}

let posicao = notas.indexOf(7);
console.log("Posição da nota 7:", posicao);

notas.splice(3, 1);

console.log("Após remover uma nota:", notas);

notas.sort((a, b) => a - b);

console.log("Notas em ordem crescente:", notas);