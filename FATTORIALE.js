function fattoriale(numero) {
    if (numero === 1 | numero === 0) {
        return 1;
    } else {
        return numero * fattoriale(numero - 1);
    }
}

console.log(fattoriale(5));

//!  Spiegazione del processo
// Immagina che tu stia calcolando fattoriale(5) e che la funzione venga chiamata in modo ricorsivo.

// fattoriale(5):

// Chiama fattoriale(4), ma non può fare il calcolo fino a che non ottiene il risultato di fattoriale(4).
// fattoriale(4):

// Chiama fattoriale(3), ma ancora non può fare il calcolo fino a che non ottiene il risultato di fattoriale(3).
// fattoriale(3):

// Chiama fattoriale(2).
// fattoriale(2):

// Chiama fattoriale(1).
// fattoriale(1) (caso base):

// Qui arriva finalmente al caso base, quindi restituisce 1 (è il caso base).
// A questo punto, la "risalita" inizia:

// fattoriale(2) ora ha il risultato di fattoriale(1) che è 1. Quindi, può fare il calcolo 2 * 1 = 2 e restituirlo.

// fattoriale(3) ora ha il risultato di fattoriale(2) che è 2. Quindi, può fare il calcolo 3 * 2 = 6 e restituirlo.

// fattoriale(4) ora ha il risultato di fattoriale(3) che è 6. Quindi, può fare il calcolo 4 * 6 = 24 e restituirlo.

// fattoriale(5) ora ha il risultato di fattoriale(4) che è 24. Quindi, può fare il calcolo 5 * 24 = 120 e restituirlo.