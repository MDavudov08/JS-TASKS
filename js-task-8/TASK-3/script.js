function totalRubless(ruble, dollar, total) {
    const totalRubles = ruble + dollar * total;
    return totalRubles;
}

let rubleAmount = 1200;
let dollarAmount = 20;
let total = 75;

const totalRubles = totalRubless(rubleAmount, dollarAmount, total);

console.log(`Bütün depozitlər üçün məbləğ: ${totalRubles} ruble.`);
