const randomNumber = Math.floor(Math.random() * 51);

let BankHesabi = 0;

let cehdler = 0;

while (true) {
    const texmin = +prompt("0 ilə 50 arasında bir rəqəm təxmin edin:");

    cehdler++;

    if (texmin === randomNumber) {
        let money;
        if (cehdler === 1) {
            money = 1000;
        } else if (cehdler >= 2 && cehdler <= 5) {
            money = 750;
        } else if (cehdler >= 6 && cehdler <= 9) {
            money = 250;
        } else {
            money = -250;
        }

        BankHesabi += money;

        document.write(`Bank hesabı qalığı: ${BankHesabi} manat `);

        document.write(`Təbrik edirik! Nömrəni ${cehdler} cəhddə tapdınız.`);

        break;
    } else {}
}
