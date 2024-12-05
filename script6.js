let task6 = (min, max) => {
    for (let i = min; i < max; i++) {
        if (task5(i)) {
            document.write(`${i} - Досконале число <br>`);
        }
    }
}

task6(1, 10000);