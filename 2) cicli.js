// ? Piccolo test di break
let i = 0;

while (i < 4) {
    console.log(i)
    break;
    i++;
}

// ? Piccolo test di continue
let j = 4
console.log(j)
while (j < 8) {
    if (j === 6) {
        continue;
    }
    j++;
    console.log(j)
}