const userNumber = +prompt("Number")

const check = (userNumber) => {
    if(userNumber > 0){
        return "daxil etdiyiniz eded musbetdi";
    }else if(userNumber < 0){
        return "daxil etdiyiniz eded menfidi ";
    }else{
        return "daxil etdiyiniz eded sifirdir";
    }
}
document.write(check(userNumber));

