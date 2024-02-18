const textAndLetter = (text, letter) => {
    const text_1 = text;
    const letter_1 = letter;

    let count = 0;

    for (let i = 0; i < text_1.length; i++) {

        if (text_1[i] === letter_1) {
            count++;
        }
    }

    return count;
}

const userText = prompt("Mətni daxil edin:");
const userLetter = prompt("Hərfi daxil edin:");

const yekun = textAndLetter(userText, userLetter);


console.log(`'${userLetter}' hərfi mətndə ${yekun} dəfə baş verir.`);
