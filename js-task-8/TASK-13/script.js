const numberMath = (num1, num2) => {
    let cavab = 1;

    for (let i = 1; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            cavab = i;
        }
    }

    return cavab;
}


const num1 = +prompt("Birinci eded daxil edin:");
const num2 = +prompt("Iinci eded daxil edin:");

const cavab = numberMath(num1, num2);

console.log(`${num1} və ${num2} ədədlərinin ən böyük ortaq bölənləri:`, cavab);
