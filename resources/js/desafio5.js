
let tarefas = [
 "Estudar HTML",
 "Estudar CSS",
 "Praticar JavaScript",
 "Estudar Laravel",
 "Revisar conteúdo"
];

console.log("Lista Inicial ");
console.log(tarefas);


tarefas.splice(1, 1); 

tarefas.splice(2, 1, "Configurar Banco de Dados");

tarefas.splice(0, 0, "Organizar mesa de estudos");

console.log("Lista Final (Modificada)");
console.log(tarefas);
