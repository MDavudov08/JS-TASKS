//"Heap" və "stack" terminləri, proqramın yaddaşında məlumatın saxlanıldığı iki əsas bölmədir.


// Stack:

// Stack proqramın icra növbəsinin idarə olunduğu, yuxarıdan aşağıya sıralanmış bir data strukturudur. Bu strukturda hər bir funksiya çağırılıb bitənədək olan bütün məlumatlar və funksiyanın local dəyişənləri saxlanılır. Bir funksiya çağırıldığında, yeni bir stack frame (yığın çərçivəsi) yaradılır və funksiyanın daxilindəki bütün dəyişənlər bu çərçivəyə daxil edilir. Funksiya icra olunduqdan sonra bu çərçivə silinir və icra növbəsi köhnə yerinə qayıdır. Stack, yığın çağırma və bitmələri yığın fəaliyyətinə uyğun sıralayaraq, proqramın dəqiqliyi və effektivliyini təmin edir.


// Heap:

// Heap dinamik olaraq yaddaşın nəzərdə tutulduğu bölmədir. Bu yer, genelliklə proqramın icra zamanı dinamik olaraq yaradılan obyektlər, arraylər və s. daxil olmaqla, proqram tərəfindən idarə olunan məlumatı saxlamaq üçün istifadə olunur. Heap-də yerləşdirilmiş məlumatlar proqram tərəfindən nəzərdə tutulduğu müddətdə saxlanılır və proqram tərəfindən dəyişdirilə bilər.