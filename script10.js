let task10 = (h1, m1, s1, h2, m2, s2) => {
    let higher = Math.max(task8(h1, m1, s1), task8(h2, m2, s2));
    let lower = Math.min(task8(h1, m1, s1), task8(h2, m2, s2));
    return task9(higher - lower);
}

document.write(`Result: ${task10(2, 12, 30, 3, 0, 2)} <br>`);
document.write(`Result: ${task10(2, 12, 30, 12, 14, 32)} <br>`);
document.write(`Result: ${task10(8, 10, 56, 1, 0, 58)} <br>`);