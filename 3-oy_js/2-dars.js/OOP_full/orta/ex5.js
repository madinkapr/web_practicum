class Transport {
    constructor(nomi, tezligi) {
        this.nomi = nomi;
        this.tezligi = tezligi;
    }

    harakatlanish() {
        return `${this.nomi} transporti ${this.tezligi} km/soat tezlikda harakatlanvotti.`
    }
}

class Avtomobil extends Transport{
    constructor(nomi, tezligi, yoqilgi_turi){
        super(nomi,tezligi)
        this.yoqilgi_turi=yoqilgi_turi;
    }

    signal_berish(){
        return 'Bip-bip'
    }
}

class Mototsikl extends Transport{
    constructor(nomi,tezligi,balon){
        super(nomi,tezligi)
        this.balon=balon
    }

    gildirakda_yurish(){
        return `Mototsikl ${this.balon} g'ildirakli balonda yuradi`
    }
}


let trans = new Transport('Nexia', 60);

let avto = new Avtomobil('BMW', 220, 'benzin');

let moto = new Mototsikl('Yamaha', 180, 2);

console.log(trans.harakatlanish());
console.log(avto.signal_berish());
console.log(moto.gildirakda_yurish());