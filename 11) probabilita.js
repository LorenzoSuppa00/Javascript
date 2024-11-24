// Premi e probabilità
const premi = [
  { nome: "10€ bonus", probabilità: 50 },  // 50% di probabilità (range: 0-50)
  { nome: "20€ bonus", probabilità: 25 },  // 25% di probabilità (range: 51-75)
  { nome: "50€ bonus", probabilità: 15 },  // 15% di probabilità (range: 76-90)
  { nome: "100€ bonus", probabilità: 9 },  // 9% di probabilità (range: 91-99)
  { nome: "1000€ bonus", probabilità: 1 }  // 1% di probabilità (range: 99-100)
];

// Funzione per selezionare un premio in base alla probabilità
function giraRuota() {
  const numeroCasuale = Math.floor(Math.random() * 100); // Genera un numero casuale tra 0 e 100
  console.log("Numero casuale: " + numeroCasuale)
  let somma = 0;

  for (const premio of premi) {
    somma += premio.probabilità;
    console.log("Somma: " + somma)
    if (numeroCasuale < somma) {
      return premio.nome; // Ritorna il premio corrispondente
    }
  }
}

// Simula 10 giri della ruota
for (let i = 0; i < 10; i++) {
  console.log("Giro " + (i + 1) + ": " + giraRuota());
}
