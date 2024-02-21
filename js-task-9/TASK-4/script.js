let calculator = {
    result: 0,
    plus: function (num1, num2) {
        this.result = num1 + num2;
        return this.result;
    },

    minus: function (num1, num2) {
        this.result = num1 - num2;
        return this.result;
    },

    vurma: function (num1, num2) {
        this.result = num1 * num2;
        return this.result;
    },

    bolme: function (num1, num2) {
        this.result = num1 / num2;
        return this.result;

    }
};

console.log(calculator.plus(5, 3)); 
console.log(calculator.minus(10, 3));
console.log(calculator.vurma(4, 6));
console.log(calculator.bolme(15, 3));
