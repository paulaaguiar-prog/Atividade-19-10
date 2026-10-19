let notas = [8, 7, 9, 4, 6, 10];

let validas = notas.every(function(nota) {
    return nota >= 0 && nota <= 10;
});

if (validas) {
    console.log("Todas as notas são válidas.");
} else {
    console.log("Existem notas fora do intervalo permitido.");
}