let area = (len, wid) => {
    if (wid == undefined) {
        return len * len;
    }
    return len * wid;
}

document.write(`Result: ${area(3, 6)} <br>`);
document.write(`Result: ${area(8, 6)} <br>`);
document.write(`Result: ${area(8)} <br>`);