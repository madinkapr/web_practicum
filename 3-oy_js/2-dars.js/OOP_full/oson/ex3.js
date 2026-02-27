class Kitob {
    constructor(nomi, muallif, sahifalar_soni) {
        this.nomi = nomi;
        this.muallif = muallif;
        this.sahifalar_soni = sahifalar_soni
    }

    info() {
        return `"${this.nomi}" kitob ${this.muallif} muallif tomonidan yozilgan. Kitob ${this.sahifalar_soni} betdan iborat.`
    }
}

let kitob1 = new Kitob('O\'tgan kunlar', 'Abdulla Qodiriy', 187);
console.log(kitob1.info())
