const firstNumber = document.getElementById('firstNumber');
const operator = document.getElementById('operator');
const secondNumber = document.getElementById('secondNumber');
const calculate = () => {
    let result;
    switch (operator.value) {
        case '+':
            result = +firstNumber.value + +secondNumber.value;
            break;
        case '-':
            result = firstNumber.value - secondNumber.value;
            break;
        case '*':
            result = firstNumber.value * secondNumber.value;
            break;
        case '/':
            result = firstNumber.value / secondNumber.value;
            break;
        default:
            result = "Yalnış operator";
    }
    document.getElementById('result').innerHTML = "Cavab " + result;
}
