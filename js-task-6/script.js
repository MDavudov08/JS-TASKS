/* task-1 IF-ELSE */

// let DayOfTheWeek = +prompt("Heftenin gununu daxil edin... (1-7)")
// if (DayOfTheWeek === 1) {
//     document.write("Bazar Ertəsi")
// } else if (DayOfTheWeek === 2) {
//     document.write("Çərşənbə Axşamı")
// } else if (DayOfTheWeek === 3) {
//     document.write("Çərşənbə")
// } else if (DayOfTheWeek === 4) {
//     document.write("Cümə Axşamı")
// } else if (DayOfTheWeek === 5) {
//     document.write("Cümə")
// } else if (DayOfTheWeek === 6) {
//     document.write("Şənbə")
// } else if (DayOfTheWeek === 7) {
//     document.write("Bazar")
// } else {
//     document.write("Həftənin belə günü yoxdur xaiş olunur (1-7) rəqəmlər daxil edin")
// }


/* task-1 SWITCH CASE */


// let DayOfTheWeek = +prompt("Heftenin gununu daxil edin... (1-7)")
// switch (DayOfTheWeek) {
//     case 1:
//         document.write("Bazar Ertəsi");
//         break;
//     case 2:
//         document.write("Çərşənbə Axşamı")
//         break;
//     case 3:
//         document.write("Çərşənbə")
//         break;
//     case 4:
//         document.write("Cümə Axşamı")
//         break;
//     case 5:
//         document.write("Cümə")
//         break;
//     case 6:
//         document.write("Şənbə")
//         break;
//     case 7:
//         document.write("Bazar")
//         break;
//     default: document.write("Həftənin belə günü yoxdur xaiş olunur (1-7) rəqəmlər daxil edin")
// }


/* TASK-2 IF-ELSE */


// let MonthsOfTheYear = +prompt("İlin aylarını daxil edin... (1-12)")
// if (MonthsOfTheYear === 1) {
//     document.write("Yanvar")
// } else if (MonthsOfTheYear === 2) {
//     document.write("Fevral")
// } else if (MonthsOfTheYear === 3) {
//     document.write("Mart")
// } else if (MonthsOfTheYear === 4) {
//     document.write("Aprel")
// } else if (MonthsOfTheYear === 5) {
//     document.write("May")
// } else if (MonthsOfTheYear === 6) {
//     document.write("İyun")
// } else if (MonthsOfTheYear === 7) {
//     document.write("İyul")
// } else if (MonthsOfTheYear === 8) {
//     document.write("Avqust")
// } else if (MonthsOfTheYear === 9) {
//     document.write("Sentyabr")
// } else if (MonthsOfTheYear === 10) {
//     document.write("Oktyabr")
// } else if (MonthsOfTheYear === 11) {
//     document.write("Noyabr")
// } else if (MonthsOfTheYear === 12) {
//     document.write("Dekabr")
// } else {
//     document.write("İlin belə bir ayı yoxdur xaiş olunur (1-12) rəqəmlər daxil edin")
// }


/* TASK-2 SWITCH-CASE */

// let MonthsOfTheYear = +prompt("İlin aylarını daxil edin... (1-12)")
// switch (MonthsOfTheYear) {
//     case 1:
//         document.write("Yanvar");
//         break;
//     case 2:
//         document.write("Fevral")
//         break;
//     case 3:
//         document.write("Mart")
//         break;
//     case 4:
//         document.write("Aprel")
//         break;
//     case 5:
//         document.write("May")
//         break;
//     case 6:
//         document.write("Iyun")
//         break;
//     case 7:
//         document.write("Iyul")
//         break;
//     case 8:
//         document.write("Avqust")
//         break;
//     case 9:
//         document.write("Sentyabr")
//         break;
//     case 10:
//         document.write("Oktyabr")
//         break;
//     case 11:
//         document.write("Noyabr")
//         break;
//     case 12:
//         document.write("Dekabr")
//         break;
//     default: document.write("İlin belə bir ayı yoxdur xaiş olunur (1-12) rəqəmlər daxil edin")
// }


/* TASK-3 IF-ELSE */


// let username = prompt("Enter your Username")
// let  gender = prompt("Enter your Gender (K-Q)")

// if(gender === "k" || gender === "K"){
//     document.write(`Sisteme xos gelmisiniz cenab ${username}`)
// }else if(gender === "q" || gender === "Q"){
//     document.write(`sisteme xos gelmisiniz ${username} xanim`)
// }else{
//     document.write("Siz düzgün cinsi seçməmisiniz, lütfən düzgün formada yenidən daxil edin")
// }


/* TASK-3 SWITCH-CASE */


// let username = prompt("Enter your Username")
// let gender = prompt("Enter your Gender (K-Q)")
// switch (gender) {
//     case "k":
//     case "K":
//         document.write(`Sisteme xos gelmisiniz cenab ${username}`)
//         break;
//     case "Q":
//     case "q":
//         document.write(`Sisteme xos gelmisiniz ${username} xanim`)
//         break;
//     default: document.write("Siz düzgün cinsi seçməmisiniz, lütfən düzgün formada yenidən daxil edin")
// }

/* TASK-4 */

// let name = prompt("Enter your name:");
// let gender = prompt("Enter your gender (K/Q):");
// let age = +prompt("Enter your age:");

// let user = (age >= 18) ? "Salam" : "Partide iştirak etmək üçün çox gəncsiniz";

// if (gender === "K" || gender === "k") {
//     document.write(`${user} cenab ${name}`)
// } else if (gender === "Q" || gender === "q") {
//     document.write(`${user} ${name} xanim`)
// } else {
//     document.write("Siz düzgün cinsi seçməmisiniz, lütfən düzgün formada yenidən daxil edin")
// }

/* TASK-5 */

// let EvinKvadrati = 2100;
// let price = 99999;
// let valyuta = "AZN";

// if (EvinKvadrati > 2000 && price === 99999 && valyuta === "AZN") {
//     document.write("Evi aliram!");
// } else {
//     document.write("Evi Almiram. mene uygun deyil");
// }


