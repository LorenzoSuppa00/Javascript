//! Esercizio 3: inviare Dati a un'API

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// Dati da inviare
const postData = {
  title: "Pippo",
  body: "Paperino",
  userId: 1,
};
// Funzione per inviare dati
fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData), // Converte i dati in JSON
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Dati inviati:", data); // Visualizza la risposta dell'API
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
