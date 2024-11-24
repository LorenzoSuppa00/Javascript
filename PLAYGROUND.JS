let numeri = [1, 2, 3, 4, 5];

function rimpiazza(array) {
    let ultimoElemento = array.pop();  // Rimuove l'ultimo elemento
    array.unshift(ultimoElemento);     // Aggiunge l'ultimo elemento all'inizio
    return array;
}

console.log(rimpiazza(numeri));  
