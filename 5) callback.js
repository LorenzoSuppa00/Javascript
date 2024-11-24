// Le callback sono funzioni utili quando bisogna eseguire una funzione che deve aspettare che un'altra funzione termini

function saluta(nome, callback) {
    console.log(`Ciao, ${nome}!`);
    callback();
}

function fineSaluto() {
    console.log("Saluto completato.");
}

saluta("Mario", fineSaluto);
