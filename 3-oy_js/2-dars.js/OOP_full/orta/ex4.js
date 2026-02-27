class BankHisobi {
    constructor(hisob_raqami, egasi_ismi, balans) {
        this.egasi_ismi = egasi_ismi;
        this.balans = balans;
        this.hisob_raqami = hisob_raqami;
    }

    deposipul_qoshish(summa) {
        return `Deposit puli: ${this.balans = this.balans + summa}`
    }

    pul_yechish(summa) {
        if (summa > this.balans) {
            return 'Yetarli mablag\' yo\'q'
        } else {
            return `Withdraw puli: ${this.balans = this.balans - summa}`
        }
    }

    balans_korish() {
        return `Balansda: ${this.balans}`
    }
}

let hisob1 = new BankHisobi(8600123456,'Ali Aliyev', 1000000)
console.log(hisob1.deposipul_qoshish(500000))
console.log(hisob1.pul_yechish(300000))
console.log(hisob1.balans_korish())
