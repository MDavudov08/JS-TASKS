/* 
    Object.assign() metodunun əsas məqsədi, bir neçə obyektin xüsusiyyətlərini bir obyektə kopyalamaqdır.
*/

Object.assign(target, source1, source2,);

// target:  Məqsəd obyekti. Digər obyekt və ya obyektlərin xüsusiyyətləri buraya kopyalanır.

// source1, source2, Kopyalanacaq digər obyektlər.

let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };

let mergedObject = Object.assign(target, source);

console.log(mergedObject);  // { a: 1, b: 4, c: 5 }

/* Bu nümunədə, source obyektindəki xüsusiyyətlər target obyektinə əlavə edilir.Eyni adlı xüsusiyyət olan b, sonuncu obyektin dəyəri olan 4 ilə əvəzlənir.mergedObject dəyişəninə yığılan obyekt geri qaytarılır.
Bu metodun ən böyük gücü, obyektə müxtəlif mənbələrdən xüsusiyyətlərin sürətli bir şəkildə kopyalanmasına imkan verməsidir. Bu, obyektlərinin yaradılması, birləşdirilməsi və ya dəyişdirilməsi üçün istifadə edilə bilər. */