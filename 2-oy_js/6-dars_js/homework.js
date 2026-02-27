// 1-masala  Foydalanuvchini tanish funksiyasi (this)
const user = {
 name: "Ali",
 age: 20,
 introduce() {
     return `Salom men ${this.name}. Yoshim ${this.age} da`
 }
};

console.log(user.introduce())

// 2-Masala: call/apply — Soliq hisoblash
const worker1 = { salary: 3000 };
const worker2 = { salary: 4500 };

function calculateTax(percent) {
 return this.salary * (percent / 100);
}

console.log(calculateTax.call(worker1, 15)) // 450
console.log(calculateTax.apply(worker2, [10])) //450

// 3-Masala: bind — Chegirma funksiyasi
const product = {
    name: "Laptop",
    price: 5000
};

function discount(percent) {
    return this.price - (this.price * percent / 100);
}

const discountLaptop10 = discount.bind(product,10);
console.log(discountLaptop10());


// 4-Masala: Math metodlari — Random ID generator
function generateId(){
    return Math.floor(Math.random()*9000)+1000
}

console.log(generateId())

// 5-Masala: Object + this — Bank hisoblagichi
const account = {
    owner:"Sardor",
    balance:1000,
    deposit(amount){
        return this.balance+=amount;
    },
    withdraw(amount) {
        if(amount>=this.balance){
            return "Yetarli mablag' yo'q";
        }else{
            return this.balance-=amount;
        }
    },
    getInfo(){
        return `${this.owner} balansingiz: ${this.balance}`;
    }
};

console.log(account.deposit(300));
console.log(account.withdraw(500));
console.log(account.getInfo());

// 6-Math.round / Math.floor / Math.ceil — Sonni yaxlitlash
function mathFunc(number){
    return `${Math.round(number)} - Math.round da; \n${Math.ceil(number)} - Math.ceil da;\n${Math.floor(number)} - Math.floor da;`;
}
console.log(mathFunc(4.4))

// 7-Math.max / Math.min — Uchta sondan eng kattasi/kichigi
const a = 14;
const b = 88;
const c = 23;
console.log(`3ta sondan eng kattasi = ${Math.max(a,b,c)}`);
console.log(`3ta sondan eng kichigi = ${Math.min(a,b,c)}`);

// 8-isNaN — “Sonmi yoki emas?” tekshiruvchi funksiya
function checkValue(value) {
    if(Number.isNaN(Number(value))){
        console.log("Bu son emas!");
    }else{
        console.log("Bu haqiqiy son")
    }
}
checkValue("hello");
checkValue(45);

// 9-isInteger — Yoshni tekshirish
function checkAge(age){
    if(Number.isInteger(age)){
        console.log("Yoshingiz qabul qilindi")
    }else{
        console.log("Yosh faqat butun son bo'lishi kerak!")
    }
}

checkAge('25');
checkAge(25);

// 10-toFixed — Pul formatida chiqarish
function formatMoney(amount){
    console.log(amount.toFixed(2));
}

formatMoney(12);
formatMoney(12.467);

// 11-Ism familyani formatlash
function formatUser(user){
    user = user.trim(" ");
    user = user.toLowerCase();
    let arr = user.split(' ');
    let ism = arr[0];
    let familiya = arr[1];
    ism = ism[0].toUpperCase()+ism.slice(1);
    familiya = familiya[0].toUpperCase()+familiya.slice(1);
    console.log(`${ism} ${familiya}`) 
}

formatUser('   dilshod gaibnazarov ');

// 12-URL-friendly username yaratish
let username = "Otabek Qodirov"
username = username.toLowerCase();
username = username.replace(' ', '.');
// username = username.concat('_01');  //otabek.qodirov_01
username += '_01'
console.log(username)

// 13-So‘z nechanchi indexdan boshlanishini topish
const text = "JavaScript juda zo'r kuchli dasturlash tili";
console.log(text.indexOf("zo'r"))

// 14-Matndan faqat raqamlarni ajratib olish
const msg = "Sizning kodingiz: A-82F94. Amal qilish muddati: 30 kun.";
let result = "";
for(let i=0; i<msg.length;i++){
    let char = msg.charAt(i);
    if(char>='0' && char<='9'){
        result = result.concat(char)
    }
}

console.log(result)


// 15-So‘zni cenzura qilish
let str = prompt('Matn kiriting iltimos: ');
console.log(str.replace('yomon', 'y*mon'));

// 16-Start and End tekshirish
let str = "https://google.com"
let start = str.startsWith('https');
let finish = str.endsWith('.com');

if(start==true && finish==true){
    console.log('Valid link')
}else{
    console.log('Invalid link')
}

// 17-So‘zlar sonini sanash
let msg = "JavaScript juda qiziqarli dasturlash tili"
let arr = msg.split(' ');
console.log(arr.length)