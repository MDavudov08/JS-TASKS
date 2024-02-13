const number = +prompt("Ədədi daxil edin:");
console.log(`Daxil edilən ədəd ${number}`);
for (let i = number; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}