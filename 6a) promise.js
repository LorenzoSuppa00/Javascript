let promessa = new Promise((resolve, reject) => {
  // Operazione asincrona
  let successo = false;
  if (successo) {
    resolve("TUTTO OK");
  }
  else {
    reject("ERRORE")
  }
});

promessa
  .then(risultato => console.log(risultato))
  .catch(errore => console.error(errore));