let number = +prompt("İki rəqəmli nömrə daxil edin:");

if (number < 10 || number > 99) {
  document.write("Yalnış daxiletmə. Duzgun iki rəqəmli nömrə daxil edin.");
} else {
  while (number < 100) {
    number += 7;
  }
  document.write(`Üç rəqəmli rəqəm belədir: ${number}`);
}
