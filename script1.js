let task1 = function(a, b) {
    return a == b ? 0 : (a > b ? 1 : -1);
}

let task_1 = (a, b) => {
    return a == b ? 0 : a > b ? 1 : -1;
}

document.write(`Result: ${task_1(1,5)} <br>`);
document.write(`Result: ${task_1(5,1)} <br>`);
document.write(`Result: ${task_1(1,1)} <br>`);