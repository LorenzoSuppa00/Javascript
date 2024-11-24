//! Esercizio 4: aggiornare Dati con PUT

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
// Dati aggiornati
const updatedData = {
  id: 1,
  title: "updated title",
  body: "updated body",
  userId: 1,
};
// Funzione per aggiornare i dati
fetch(apiUrl, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Dati aggiornati:", data); // Visualizza la risposta dell'API
  })
  .catch((error) => {
    console.error("Si è verificato un errore:", error);
  });
