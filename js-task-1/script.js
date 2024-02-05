const hefteninGunleri = +prompt("Zəhmət olmasa 1 və 7 arası rəqəm daxil edin:");

if (hefteninGunleri >= 1 && hefteninGunleri <= 7) {
    switch (hefteninGunleri) {
        case 1:
            console.log("Bu gun bazar ertəsi'dir");
            break;
        case 2:
            console.log("Bu gun çərşənbə axşamı'dir");
            break;
        case 3:
            console.log("Bu gun çərşənbə'dir");
            break;
        case 4:
            console.log("Bu gun cümə axşamı'dir");
            break;
        case 5:
            console.log("Bu gun cümə'dir");
            break;
        case 6:
            console.log("Bu gun şənbə'dir");
            break;
        case 7:
            console.log("Bu gun bazar'dir");
            break;
    }
} else {
    console.log("XƏTA... Zəhmət olmasa 1 və 7 arası rəqəm daxil edin...");
}


