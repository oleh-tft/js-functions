let task5 = (n) => {
    let sum = 0;
    
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }

    return sum == n;
}

document.write(`Result: ${task5(8) ? "Досконале число" : "Не досконале число"} <br>`);
document.write(`Result: ${task5(6) ? "Досконале число" : "Не досконале число"} <br>`);
document.write(`Result: ${task5(496) ? "Досконале число" : "Не досконале число"} <br>`);