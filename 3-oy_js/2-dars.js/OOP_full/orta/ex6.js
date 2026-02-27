class Mahsulot {
    constructor(nomi, narxi, soni) {
        this.nomi = nomi;
        this.narxi = narxi;
        this.soni = soni;
    }

    umumiy_qiymat() {
        return `${this.nomi} mahsulot umumiy narxi: ${this.narxi*this.soni} so'm`
    }
}

let p1 = new Mahsulot('Olma', 5000, 2);
let p2 = new Mahsulot('Kitob', 25000, 2);
let p3 = new Mahsulot('Ko\'ylak', 200000, 3);

console.log(p1.umumiy_qiymat())
console.log(p2.umumiy_qiymat())
console.log(p3.umumiy_qiymat())

