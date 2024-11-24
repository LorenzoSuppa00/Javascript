//! Possiamo convertire oggetti JavaScript in JSON e viceversa.
let persona = { nome: "Mario", età: 30 };
let jsonString = JSON.stringify(persona);
console.log(jsonString); // {"nome":"Mario","età":30}
// 
let oggetto = JSON.parse(jsonString);
console.log(oggetto.nome); // Mario
