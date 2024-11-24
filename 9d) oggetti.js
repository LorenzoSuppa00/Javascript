//! Copiare gli oggetti
// let originale = { nome: "Mario", età: 30 };
// let copia = Object.assign({}, originale);
// console.log(copia.nome); //? Mario

let originale = { nome: "Mario", esami: { matematica: 28 } };
let copiaProfonda = JSON.parse(JSON.stringify(originale));
console.log(copiaProfonda.esami.matematica); // 28
