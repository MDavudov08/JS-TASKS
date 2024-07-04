const invertText = (text) => {
    return text.split('').reverse().join('');
}

const inputText = "Hello World";
const reversedText = invertText(inputText);
console.log(reversedText);
