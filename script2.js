let factorial = n => {
    let sum = 1;
    while (n > 1) {
        sum *= n;
        n--;
    }
    return sum;
}

document.write(`Result: ${factorial(5)} <br>`);
document.write(`Result: ${factorial(8)} <br>`);
document.write(`Result: ${factorial(24)} <br>`);