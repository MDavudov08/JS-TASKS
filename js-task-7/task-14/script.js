const user = prompt("Enter some text:");
let eksMetn = '';
for (let i = user.length - 1; i >= 0; i--) {
  eksMetn += user[i];
}
console.log("Əks mətn:", eksMetn);
