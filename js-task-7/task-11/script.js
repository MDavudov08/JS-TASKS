const userInput = +prompt("Rəqəm daxil edin:");

if (userInput <= 100) {
  console.log("Yalnış daxiletmə. 99 dan böyük ədəd daxil edin.");
} else {
  console.log(`İstifadəçi tərəfindən daxil edilmiş rəqəm: ${userInput}`);

  let cem = 0;


  for (let i = 100; i < 1000; i++) {
    if (userInput % i === 0) {
      cem += i;
    }
  }

  console.log(`Üçrəqəmli bölənlərin cəmi: ${cem}`);
}
