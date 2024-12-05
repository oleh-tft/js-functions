let task9 = (sec) => {
    let h = parseInt(sec / 3600);
    let m = parseInt((sec - (h * 3600)) / 60);
    let s = sec - h * 3600 - m * 60;
    return `${h}:${m}:${s}`;
}

document.write(`Result: ${task9(7950)} <br>`);
document.write(`Result: ${task9(10802)} <br>`);
document.write(`Result: ${task9(600)} <br>`);