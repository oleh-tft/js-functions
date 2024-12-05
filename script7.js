let task7 = (h, m, s) => {
    if (s == undefined)
        s = "00";
    if (m == undefined)
        m = "00";
    return `${h}:${m}:${s}`;
}

document.write(`Result: ${task7(10, 51, 32)} <br>`);
document.write(`Result: ${task7(16, 22)} <br>`);
document.write(`Result: ${task7(18)} <br>`);