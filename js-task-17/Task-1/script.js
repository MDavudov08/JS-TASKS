const passwordGenerator = () => {
    const text = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM[!@#$%&*]';
    const passwordLength = 10;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * text.length);
        password += text[randomIndex];
    }
    return password;
}
const password1 = passwordGenerator();
const password2 = passwordGenerator();
console.log('Password 1:', password1);
console.log('Password 2:', password2);
console.log('Password:', password1 === password2);
