// 1-ex
class Calculator {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
    
    qoshish(){
        return `${this.a}+${this.b} = ${this.a+this.b}`
    }
    
    ayirish(){
        return `${this.a}-${this.b} = ${this.a-this.b}`
    }
    
    kopaytirish(){
        return `${this.a}*${this.b} = ${this.a*this.b}`
    }
    
    bolish(){
        return `${this.a}/${this.b} = ${this.a/this.b}`
    }
}

let calc1 = new Calculator(5,3);
calc1.qoshish()
calc1.ayirish()
calc1.kopaytirish()
calc1.bolish()

// 2-Exercise
class Kitob {
    constructor(nomi,muallif, sahifalar_soni) {
        this.nomi = nomi;
        this.muallif = muallif;
        this.sahifalar_soni=sahifalar_soni
    }
    
    info(){
        return `"${this.nomi}" kitob ${this.muallif} muallif tomonidan yozilgan. Kitob ${this.sahifalar_soni} betdan iborat.`
    }
}

let kitob1 = new Kitob('O\'tgan kunlar', 'Abdulla Qodiriy', 187);
console.log(kitob1.info())

// 3-ex
// Talaba klassini yarating. Klassda ism, familiya, yosh va guruh xususiyatlari bo'lsin. Talaba haqida ma'lumot chiqaruvchi info() metodini qo'shing
class Talaba{
    constructor(ism,familiya,yosh,gurux){
        this.ism = ism
        this.familiya = familiya
        this.yosh = yosh
        this.gurux = gurux
    }
    info(){
        return this.ism,this.familiya,this.yosh,this.gurux
    }
}

let result=new Talaba('Ali','alisherov',21,'n6')
console.log(result)

// 4-ex
class BankHisobi {
    constructor(hisob_egasi,balans){
        this.hisob_egasi = hisob_egasi;
        this.balans = balans;
    }
    
    deposit(summa){
        return `Deposit puli: ${this.balans=this.balans+summa}`
    }
    
    withdraw(summa){
        return `Withdraw puli: ${this.balans=this.balans-summa}`
    }
    
    showBalance() {
        return `Balansda: ${this.balans}`
    }
}

let hisob = new BankHisobi('Ali Aliyev', 3000000)
console.log(hisob.deposit(200000))
console.log(hisob.withdraw(300000))
console.log(hisob.showBalance())


// 5-ex

class Car {
    constructor(marka,model,yil,rang){
        this.marka = marka;
        this.model = model;
        this.yil = yil;
        this.rang = rang;
    }
    
    info(){
        return `Markasi: ${this.marka}\nModeli: ${this.model}\nRangi: ${this.rang}\nYili: ${this.yil} `
    }
    
    yoshi(current_year){
        return `Yoshi: ${current_year-this.yil}`
    }
}

let car = new Car('Chevrolet', 'Malibu', 2021,'qora')
console.log(car.info())
console.log(car.yoshi(2025))


// 6-ex

class Telefon {
    constructor(brend,model,xotira){
        this.brend = brend;
        this.model = model;
        this.xotira = xotira;
    }
    
    info(){
        return `Brendi: ${this.brend}\nModeli: ${this.model}\nXotirasi: ${this.xotira} GB`
    }
    
    upgradeMemory(qoshimcha){
        return `Xotirasi: ${this.xotira=this.xotira+qoshimcha} GB`
    }
}

let tel = new Telefon('Samsung', 'OnePlus 22', 128 )
console.log(tel.info())
console.log(tel.upgradeMemory(30))


// 7-ex

class Kurs {
    constructor(kurs_nomi,davomiylik,narx){
        this.kurs_nomi = kurs_nomi;
        this.davomiylik = davomiylik;
        this.narx = narx;
    }
    
    info(){
        return `Kurs: ${this.kurs_nomi}\nDavomiyligi: ${this.davomiylik} oy\nNarxi: ${this.narx} so'm`
    }
    
    oylikNarx(){
        return `Oylik narxi: ${Math.round(this.narx/this.davomiylik)} so'm`
    }
}

let kurs = new Kurs('Web practikum', 7, 1800000 )
console.log(kurs.info())
console.log(kurs.oylikNarx())
