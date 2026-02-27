class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    qoshish() {
        return `${this.a}+${this.b} = ${this.a + this.b}`
    }

    ayirish() {
        return `${this.a}-${this.b} = ${this.a - this.b}`
    }

    kopaytirish() {
        return `${this.a}*${this.b} = ${this.a * this.b}`
    }

    bolish() {
        return `${this.a}/${this.b} = ${this.a / this.b}`
    }
}

let calc1 = new Calculator(5, 3);
console.log(calc1.qoshish())
console.log(calc1.ayirish())
console.log(calc1.kopaytirish())
console.log(calc1.bolish())

