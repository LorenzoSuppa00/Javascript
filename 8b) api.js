//! Esercizio 2: recuperare Dati con Async/Await 

async function fetchData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data); // Visualizza i dati
  } catch (error) {
    console.error("Si è verificato un errore:", error);
  }
}
// Chiamata della funzione
fetchData();
