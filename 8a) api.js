//! Esercizio 1: recuperare Dati da un'API pubblica

// URL dell'API
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// Funzione per recuperare i dati
fetch(apiUrl)
  .then((response) => {
    // Controlla se la risposta è ok
    if (!response.ok) {
      throw new Error("Network response is not OK");
    }
    return response.json(); // Converte la risposta in JSON
  })
  .then((data) => {
    console.log(data); // Visualizza i dati in console
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error); // Gestisce gli errori
  });
