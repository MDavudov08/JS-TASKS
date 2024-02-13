const user = prompt("deyer daxil edin (UP,RIGHT,DOWN,LEFT)")

switch (user) {
    case "UP":
    case "up":
        console.log("yuxari get");
        break;
    case "RIGHT":
    case "right":
        console.log("saga get");
        break
    case "DOWN":
    case "down":
        console.log("asagi get");
        break
    case "LEFT":
    case "left":
        console.log("sola get");
    default: console.log("dogru daxil etmemisiniz");

}