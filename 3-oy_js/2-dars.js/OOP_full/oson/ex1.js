class Talaba {
    constructor(ism, familiya, yosh, gurux) {
        this.ism = ism
        this.familiya = familiya
        this.yosh = yosh
        this.gurux = gurux
    }
    info() {
        return `${this.ism} ${this.familiya} ${this.yosh} yoshda. ${this.gurux} guruhda o'qiydi`
    }
}

let student1 = new Talaba('Ali', 'Aliyev', 21, 'BET80')
console.log(student1.info())
