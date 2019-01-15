    let a = 0;
    let b = 1;
    let sum = 0;
    let c = 0;

    while (c < 4000000 ) {
        c = a + b;
        if (c % 2 === 0) {
            sum = sum + c;
        }
        a = b;
        b = c;
    }

console.log(sum);
document.write(sum);