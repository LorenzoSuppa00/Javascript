const inventario = [
  { prodotto: "Laptop", quantita: 10, prezzo: 1500 },
  { prodotto: "Mouse", quantita: 0, prezzo: 25 },
  { prodotto: "Tastiera", quantita: 5, prezzo: 45 },
];

const utente = {
  nome: "Mario Rossi",
  metodoDiPagamento: "carta_di_credito",
};

// Funzione per cercare un articolo
function checkInventory(nomeProdotto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const prodotto = inventario.find(i => i.prodotto === nomeProdotto); // ! Rivedere
      if (prodotto && prodotto.quantita > 0) {
        resolve(prodotto);
      } else {
        reject(`Articolo ${nomeProdotto} non disponibile`);
      }
    }, 1000); // 1 secondo
  });
}

// Funzione per elaborare il pagamento
function processPayment(prodotto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (utente.metodoDiPagamento === "carta_di_credito") {
        console.log(
          `Pagamento di ${prodotto.prezzo} € elaborato per l'articolo ${prodotto.prodotto}`
        );
        resolve(`Pagamento confermato per ${prodotto.prodotto}`);
      } else {
        reject("Errore nel pagamento");
      }
    }, 3000); // 3 secondi
  });
}

// Funzione per spedire l'ordine
function shipOrder(prodotto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Ordine di ${prodotto.prodotto} spedito a ${utente.nome}`);
      resolve(`Spedizione completata per ${prodotto.prodotto}`);
    }, 2000); // 2 secondi
  });
}

// Funzione principale per gestire l'ordine
function processOrder(nomeProdotto) {
  checkInventory(nomeProdotto)
    .then((prodotto) => {
      console.log(`${prodotto.prodotto} disponibile, prezzo: ${prodotto.prezzo} €`);
      return processPayment(prodotto);
    })
    .then((paymentMessage) => {
      console.log(paymentMessage);
      return shipOrder(inventario.find((i) => i.prodotto === nomeProdotto));
    })
    .then((shippingMessage) => {
      console.log(shippingMessage);
      console.log("Ordine completato con successo!");
    })
    .catch((error) => {
      console.error("Errore: " + error);
    });
}

// Test dell'ordine per diversi articoli
processOrder("Laptop"); // Successo
processOrder("Mouse"); // Articolo non disponibile
processOrder("Tastiera"); // Successo
