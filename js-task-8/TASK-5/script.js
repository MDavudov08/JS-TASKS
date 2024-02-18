const calc = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(calc(4, 6, '+'));
console.log(calc(4, 6, '-'));
console.log(calc(4, 6, '*'));
console.log(calc(6, 2, '/'));
