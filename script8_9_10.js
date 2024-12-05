let task8 = (h, m, s) => h * 3600 + m * 60 + s;

document.write(`Result: ${task8(2, 12, 30)} секунд <br>`);
document.write(`Result: ${task8(3, 0, 2)} секунд <br>`);
document.write(`Result: ${task8(0, 10, 0)} секунд <br>`);


document.write("<hr>");


let task9 = (sec) => {
    let h = parseInt(sec / 3600);
    let m = parseInt((sec - (h * 3600)) / 60);
    let s = sec - h * 3600 - m * 60;
    return `${h}:${m}:${s}`;
}

document.write(`Result: ${task9(7950)} <br>`);
document.write(`Result: ${task9(10802)} <br>`);
document.write(`Result: ${task9(600)} <br>`);


document.write("<hr>");


let task10 = (h1, m1, s1, h2, m2, s2) => {
    let higher = Math.max(task8(h1, m1, s1), task8(h2, m2, s2));
    let lower = Math.min(task8(h1, m1, s1), task8(h2, m2, s2));
    return task9(higher - lower);
}

document.write(`Result: ${task10(2, 12, 30, 3, 0, 2)} <br>`);
document.write(`Result: ${task10(2, 12, 30, 12, 14, 32)} <br>`);
document.write(`Result: ${task10(8, 10, 56, 1, 0, 58)} <br>`);