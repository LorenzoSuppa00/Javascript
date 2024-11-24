function f1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = "Ciao 1";
      if (output === "Ciao 1") {
        resolve(console.log(output));
      } else {
        reject("ERRORE: Output non corretto");
      }
    }, 5000);
  });
}

function f2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = "Ciao 2";
      if (output === "Ciao 2") {
        resolve(console.log(output));
      } else {
        reject("ERRORE: Output non corretto");
      }
    }, 3000);
  });
}

function f3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let output = "Ciao 3";
      if (output === "Ciao 3") {
        resolve(console.log(output));
      } else {
        reject("ERRORE: Output non corretto");
      }
    }, 1000);
  });
}

f1()
  .catch(errore => console.error(errore))
  .then(() => f2())
  .catch(errore => console.error(errore))
  .then(() => f3())
  .catch(errore => console.error(errore));
