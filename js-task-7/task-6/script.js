const boy = prompt("boyunuzu daxil edin");
const ceki = prompt("cekinizi daxil edin");
const BMI = ceki / boy ** 2;
document.write(parseInt(BMI));
if(BMI <= 18.5){
    document.write(" Ariq")
}else if(BMI <= 25){
    document.write(" normal")
}else if(BMI <= 30){
    document.write(" kok")
}else{
    document.write(" obese")
}