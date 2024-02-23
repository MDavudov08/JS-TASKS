function Car(brand,model,year,engine) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
}

let car1 = new Car("Toyota","Camry", 2020, "v6")
let car2 = new Car("Mercedes","Cls63S",2012,"5.5l v8")
let car3 = new Car("BMW","F90",2020,"4.4l v8")

console.log("CAR 1",car1);
console.log("CAR 2",car2.model);
console.log("CAR 3",car3.brand);