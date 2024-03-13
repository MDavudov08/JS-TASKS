const input = document.getElementById('inputBox');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('deleteBtn');

const clickDisplay = (value) => {
    input.value += value;
};

deleteBtn.onclick = () => {
    input.value = input.value.slice(0, -1);
};

clearBtn.onclick = () => {
    input.value = '';
};

const calc = () => {
    const inp = input.value;
    const result = hesapla(inp);
    input.value = result;
};

const hesapla = (inp) => {
    const elem = inp.split(/\b/).filter(e => e.trim());
    let result = parseFloat(elem[0]);
    for (let i = 1; i < elem.length; i += 2) {
        const operator = elem[i];
        const operand = parseFloat(elem[i + 1]);
        switch (operator) {
            case "+":
                result += operand;
                break;
            case "-":
                result -= operand;
                break;
            case "*":
                result *= operand;
                break;
            case "/":
                if (operand !== 0) {
                    result /= operand;
                } else {
                    return "Division by zero!";
                }
                break;
            default:
                return "Error: Invalid operator!";
        }
    }
    return result;
};
