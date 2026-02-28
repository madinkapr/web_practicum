// // 1-masala. Yoshni tekshirish
// let age = +prompt("Yoshni kiriting: ");

// if (age >= 18) {
//     console.log('Siz voyaga yetgansiz!')
// } else {
//     console.log('Siz voyaga yetmagansiz!')
// }

// // 2-masala: Juft yoki toq 
// let num = +prompt("Butun son kiriting: ");

// if (num % 2 == 0) {
//     console.log('Juft son')
// } else {
//     console.log('Toq son')
// }

// // 3-masala: Musbat, manfiy yoki nol 
// let num = +prompt("Son kiriting: ");

// if (num > 0) {
//     console.log('Musbat');
// } else if (num < 0) {
//     console.log('Manfiy');
// } else {
//     console.log('Nol');
// }

// // 4-masala: Eng katta sonni topish
// let number1 = +prompt('1-sonni kiriting: ');
// let number2 = +prompt('2-sonni kiriting: ');

// if (number1 > number2) {
//     console.log('1-son katta');
// } else {
//     console.log('2-son katta');
// }

// // 5-masala: Bahoni tekshirish
// let mark = +prompt('Bahoni kiriting (0-100): ');

// if (mark >= 86 && mark <= 100) {
//     console.log("A'lo");
// } else if (mark >= 71 && mark <= 85) {
//     console.log("Yaxshi");
// } else if (mark >= 56 && mark <= 70) {
//     console.log("Qoniqarli");
// } else if (mark >= 0 && mark <= 55) {
//     console.log("Qoniqarsiz");
// } else {
//     console.log("Bunaqa ball yo'q");
// }


// // 6-masala: Haroratni tekshirish
// let gradus = prompt('Haroratni kiriting (°C): ');

// if (gradus >= 30) {
//     console.log("Issiq");
// } else if (gradus >= 15 && gradus <= 29) {
//     console.log("Iliq");
// } else if (gradus >= 0 && gradus <= 14) {
//     console.log("sovuq");
// } else if (gradus < 0) {
//     console.log('Juda sovuq');
// }

// // 7-masala: Yil kabisa yoki yo'qligini tekshirish

// let year = prompt('Yilni kiriting: ');

// if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
//     console.log("Kabisa yili");
// } else {
//     console.log("Oddiy yil");
// }

// // 8-masala: Login va parol
// let parol = String(prompt('Parol kiriting: '));
// let login = String(prompt('Login kiriting: '));

// if (login === 'admin' && parol === "12345") {
//     console.log("Xush kelibsiz!");
// } else {
//     console.log("Login yoki parol xato")
// }

// // 9-masala: Uchburchak turini aniqlash

// let a = +prompt('a tomonni kiriting: ');
// let b = +prompt('b tomonni kiriting: ');
// let c = +prompt('C tomonni kiriting: ');

// if (a = b = c) {
//     console.log('Teng tomonli');
// } else if (a = b) {
//     console.log('Teng yonli');
// } else {
//     console.log('Turli tomonli uchburchak');
// }

// // 10-masala: Chegirma hisoblash

// let summa = prompt('Summa kiriting: ');

// if (summa >= 1000000) {
//     console.log(`${summa - (summa * 0.2)} - 20% chegirma`);
// } else if (summa >= 500000 && summa <= 999999) {
//     console.log(`${summa - (summa * 0.1)} - 10% chegirma`);
// } else {
//     console.log("Chegirma yo'q");
// }

// // 11-masala: Simvol turini aniqlash

// let symbol = prompt('Symbol kiriting: ');
// if (typeof symbol === 'string') {
//     console.log('Harf');
// } else if (typeof symbol === 'number') {
//     console.log('Raqam');
// } else {
//     console.log('Maxsus belgi')
// }

// // 12-masala: Hafta kunini aniqlash

// let day = +prompt('1 dan 7 gacha son kiriting: ');

// if (day === 1) {
//     console.log('Dushanba');
// } else if (day === 2) {
//     console.log('Seshanba');
// } else if (day === 3) {
//     console.log('Chorshanba');
// } else if (day === 4) {
//     console.log('Payshanba');
// } else if (day === 5) {
//     console.log('Juma');
// } else if (day === 6) {
//     console.log('Shanba');
// } else if (day === 7) {
//     console.log('Yakshanba');
// } else {
//     console, log("Notog'ri raqam")
// }

// // 13-masala: Tosh-Qaychi-Qog'oz O'yini
// let raqam = +prompt("Kompyuter tasodifiy raqam tanlaydi (1-tosh, 2-qaychi, 3-qog'oz : ")

// if (raqam === 1) {
//     console.log("Qog'oz(3)")
// } else if (raqam === 2) {
//     console.log('Tosh(1)')
// } else if (raqam === 3) {
//     console.log('Qaychi(2)')
// }

// // 14-masala: Pul jarimasi hisoblagich
// const tezlik = 60;
// let haqiqiyTezlik = +prompt("Haqiqiy tezlikni kiriting: ")


// if (haqiqiyTezlik - tezlik >= 10) {
//     console.log(`Jarima ${(haqiqiyTezlik - tezlik) * 100000}`)
// } else if (haqiqiyTezlik >= 120) {
//     console.log('Guvohnomani olish')
// }

// // 15-masala: Kino chiptasi narxi
// let age = 23;
// let date = 4;
// let time = 1;
// // time:"kunduz"=1, "kecha"=0
// let cost = 50000;
// if (age < 12 || age > 60) {
//     cost /= 2;
// }
// if (date >= 1 || date <= 5 && time == 1) {
//     cost -= (cost * 0.3);
// }
// if (date == 6 || date == 7 && time == 0) {
//     cost += (cost * 0.2);
// }
// console.log(cost)


// // 16-masala: BMI (Tana massasi indeksi) kalkulyatori
// let b = prompt('Boy bering: ');
// let w = prompt('Ogirlik bering: ');

// let BMI = w / (b * b)

// if (BMI <= 18.5) {
//     console.log("Ozg'in")
// } else if (BMI >= 18.5 && BMI <= 24.9) {
//     console.log("Normal")
// } else if (BMI > 25 && BMI <= 29.9) {
//     console.log('Ortiqcha vazn')
// } else {
//     console.log('Semizlik')
// }

// // 17-masala: Bank krediti tekshirish

// let maosh = 120000;
// let kredit = 23000;
// let oy = 30;

// let min_maosh = 3000000
// let kredit_muddati = 60

// if (kredit / oy < maosh - (maosh * 0.4)) {
//     console.log('kredit berilmasin ')
// } else {
//     console.log('Berilsin')
// }

// // 18-masala: Lotereya o'yini
// let user = 45;
// let tasodifiy = 23;
// if (user === tasodifiy) {
//     console.log("Jackpot! 10,000,000 so'm yutdingiz!")
// } else if (user - tasodifiy === 5) {
//     console.log("Yaqin! 1,000,000 so'm")
// } else if (user - tasodifiy === 10) {
//     console.log("Qoniqarli! 100,000 so'm")
// } else {
//     console.log('Yutqazdingiz')
// }

// // 19-masala: Elektr energiya to'lovi
// let kwh = 450;

// if (kwh > 0 && kwh <= 100) {
//     console.log(kwh * 450, 'so\'m')
// } else if (kwh >= 101 && kwh <= 300) {
//     console.log(kwh * 650, 'so\'m')
// } else if (kwh > 300) {
//     console.log(850 * kwh, 'so\'m')
// }

// // 20-masala: Smart termostat
// let xona = 30;
// let istalgan = 21;
// let farq = xona - istalgan;

// if (farq <= -3) {
//     console.log("Isitgichni yuqori quvvatda yoqish")
// } else if (farq < 0 && farq > -3) {
//     console.log("Isitgichni past quvvatda yoqish")
// } else if (farq === 0) {
//     console.log("Optimal harorat")
// } else if (farq > 0 && farq < 3) {
//     console.log("Sovutgichni past quvvatda yoqish")
// } else if (farq > 3) {
//     console.log("Sovutgichni yuqori quvvatda yoqish")
// }

// // 21-masala: O'q otish o'yini
// let x = 50;
// let y = 50;
// let radius = 10;

// let x1 = 30;
// let y1 = 20;

// let masofa = ((x1 - 50) ** 2 + (y1 - 50) ** 2) ** 1 / 2
// console.log(masofa)

// if (masofa <= radius) {
//     console.log("To'g'ridan-to'g'ri urdi! 100 ball");
// } else if (masofa <= radius + 5) {
//     console.log('Yaqin! 50ball')
// } else if (masofa <= radius + 10) {
//     console.log('Tegdi! 20 ball')
// } else {
//     console.log("Xato! 0 ball")
// }

// // 22-masala: Internet paket tavsiyasi
// let trafik = 50;
// let talaba = true;

// if (trafik > 0 && trafik <= 10) {
//     let = 50000;
//     console.log("Mini paket - 50000 so'm")
// } else if (trafik >= 11 && trafik <= 30) {
//     narx = 90000;
//     console.log("Standart paket - 90,000 so'm")
// } else if (trafik >= 31 && trafik <= 60) {
//     narx = 150000;
//     console.log("Premium paket - 150,000 so'm")
// } else if (trafik > 60) {
//     narx = 200000;
//     console.log("Cheksiz paket - 200,000 so'm")
// }

// if (talaba) {
//     console.log(`Talabalar uchun 30% chegirmada ${narx -= narx * 0.3} so'm`)
// }

// // 23-masala: Do'kon kassasi

// const narx = 50000;
// const miqdori = 20;
// let chegirma = 1

// let summa = narx * miqdori;


// if (miqdori >= 3 && miqdori < 5) {
//     chegirma = 0.95;
// } else if (miqdori >= 5 && miqdori < 10) {
//     chegirma = 0.9
// } else if (miqdori >= 10) {
//     chegirma = 0.85;
// }

// let umumiy = summa * chegirma;

// console.log('chegirmadan keyingi summa', umumiy)
// if (umumiy >= 1000000) {
//     console.log('Umumiy chegirmasi yana 5% ga chegirma ', umumiy * 0.95)
// }

// // 25-masala: Svetofor simulyatori

// let time = prompt('Vaqtni kiriting(soniya): ');

// if (time > 0 && time <= 30) {
//     console.log(`To'xtang ${30 - time} soniya qoldi`)
// } else if (time >= 31 && time <= 35) {
//     console.log("Ehtiyot bo'ling!")
// } else if (time >= 36 && time <= 90) {
//     console.log(`Yuring! ${90 - time} soniya qoldi`)
// }

// // 26-masala: Stipendiya hisoblash

// let ortacha_ball = 4.0;
// let davomat = 86;
// let faol = false;

// if (ortacha_ball >= 4.5 && davomat >= 90 && faol === true) {
//     console.log('Stipendiya 1000000 so\'m')
// } else if (ortacha_ball >= 4.0 && davomat >= 85 && faol) {
//     console.log('Stipendiya 700 000 so\'m')
// } else if (ortacha_ball >= 3.5 && davomat >= 80 && faol) {
//     console.log('Stipendiya 500 000 so\'m')
// } else {
//     console.log('Stipendiya yo\'q')
// }


// // 27-masala: RPG xarakter yaratish

// let kuch = 25;
// let tezlik = 40;
// let aql = 25;
// let sehr = 10;

// let umumiy = kuch + tezlik + aql + sehr;
// if (umumiy !== 100) {
//     console.log("Umumiy XP 100 bo'lishi kerak")
// } else if (kuch < 10 || tezlik < 10 || aql < 10 || sehr < 10) {
//     console.log('Minimum 10 bolishi kere har biri')
// } else if (kuch >= 50 || tezlik >= 50 || aql >= 50 || sehr >= 50) {
//     console.log("Specialist qahrayon");
// } else if ((kuch >= 20 && kuch <= 30) && (tezlik >= 20 && tezlik <= 30) && (aql >= 20 && aql <= 30) && (sehr >= 20 && sehr <= 30)) {
//     console.log("Muvozanatli qahrayon");
// } else {
//     console.log("O'rta qahrayon")
// }

// // 28-masala: Valyuta konvertor

// let valyuta = 11939;
// let summa = 600;
// let konver = 'uzs->usd';

// if (konver ===  'uzs->usd'){
//     let uzs_usd = summa/valyuta;
//     if (uzs_usd<=10000){
//         uzs_usd= uzs_usd*0.98;
//         console.log(uzs_usd)
//     }else {
//         console.log(uzs_usd)
//     }
// }else if(konver === 'usd->uzs') {
//     let usd_uzs = summa*valyuta;
//     if(usd_uzs<=10000*valyuta){
//         usd_uzs *= 0.98;
//         console.log(usd_uzs)
//     }else {
//         console.log(usd_uzs)
//     }
// }