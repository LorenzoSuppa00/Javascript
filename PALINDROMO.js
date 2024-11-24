function isPalindromo(parola) {
    let contrario = parola.split("").reverse();
    if (parola === contrario.join("")) {
        console.log("Palindromo")
    } else {
        console.log("NOOOOOOO")
    }
}

isPalindromo("ABBA")