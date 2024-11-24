let cane = {
  nome: "Oliver",
  razza: "Labrador Retriever",
  chiama: function () {
    console.log(`${this.nome}, vieni qui!`);
  },
};

cane.chiama();

// Modifica attributo
cane.nome = "Otto";
cane.chiama();

// Aggiunta attributo
cane.colore = "Nero";
console.log(cane);

// Elimina attributo
delete cane.colore;
console.log(cane);
