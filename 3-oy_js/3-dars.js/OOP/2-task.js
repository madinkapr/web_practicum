class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getCarAge(curr) {
        return curr - this.year; 
    }

    isOldCar(curr) {
        if (this.getCarAge(curr) >= 10) {
            console.log('Eski mashina');
        } else {
            console.log('Yangi mashina');
        }
    }
}

let car1 = new Car('Chevrolet', 'Nexia 3', 2009);

console.log("Moshina yoshi:", car1.getCarAge(2025));
car1.isOldCar(2025);
