// 1.
const ismlar = ['Hilola', 'Kamola', 'Eshmat', 'Toshmat', 'Sayyod'];
console.log(ismlar.length);

// 2.
const xaridlar = ['olma', 'pishloq', 'go\'sht', 'tomat', 'kartoshka'];
xaridlar.push('non', 'sut');
console.log(xaridlar);

// 3.
const kunlikVazifalar = ['Abed tayyorlash', 'Idish yuvish', 'Uyni tozalash', 'Ujn tayyorlash'];
kunlikVazifalar.unshift('Ertalab yugurish', 'Nonushta');
console.log(kunlikVazifalar)

// 4.
const kitoblar = ['algebra', 'geometriya', 'musiqa', 'ona-tili'];
console.log(kitoblar.pop());
console.log(kitoblar);

// 5.
const raqamlar = [1, 2, 3, 4, 5, 6];
raqamlar[2] = 'Yangi 1';
raqamlar[3] = 'Yangi 2';
console.log(raqamlar)

// 6
const oylar = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
console.log(oylar.slice(3, 6))

//7
const shaharlar = ['Toshkent', 'Buxoro', 'Samarqand', 'Navoiy'];
console.log(shaharlar.indexOf('Samarqand'))

// 8
const sonlar = [10, 20, 30, 40, 10, 11];
console.log(sonlar.lastIndexOf(10))

// 9
const gmails = ['user@gmail.com', 'user@example.com', 'elikpr@gmail.com'];
console.log(gmails.includes('user@example.com'))

// 10
const xodimlar = [{ name: 'Ali', maosh: 5000 }, { name: 'Eshmat', maosh: 2000 }, { name: 'Toshmat', maosh: 1000 }, { name: 'Joxa', maosh: 8000 }];
for (let xodim of xodimlar) {
    if (xodim['maosh'] > 3000) {
        console.log(xodim)
        break;
    }
}
// 11
const haroratlar = [30, 0, -5, -1];
for(let h of haroratlar){
    if(h<0){
        console.log(haroratlar.indexOf(h))
        break;
    }
}

// 12
const narxlar = [1200,2400,3500,4000,5600];
let yangiNarx = [];
for(let narx of narxlar){
    yangiNarx.push(narx*1.1)
}

console.log(yangiNarx)


// 13
const sonlar = [1,2,5,8,12,18]
for(let i=0; i<=sonlar.length-1; i++){
    if(sonlar[i]%2==0){
        console.log(sonlar[i])
    }
}

//14
const marks = [2,3,4,5,5];
let sum = 0;
for(let m of marks){
    sum+=m;
}
console.log(sum)

//15
const yosh = [24,20,15,18,19,30];
let katta = true;
for(let y of yosh){
    if(y<18){
        katta=false;
        break;
    }
}
console.log(katta)

// 16
const ballar = [95,98,88,50];
let katta = false;
for(let ball of ballar){
    if(ball>90){
        katta=true
    }
}

console.log(katta)

// 17
const raqamlar = [3,5,6,2,1];
console.log(raqamlar.sort())

// 18
const odamlar = ['Ali', 'Eshmat', 'Toshmat'];
for(let ism of odamlar){
    console.log(`Salom, ${ism}`)
}

//19
const qizil = ['olcha', 'olma', 'qulupnay'];
const sariq = ['limon', 'nok', 'banan'];
console.log(qizil.concat(sariq))

//20
const kunlar = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

for(let kun of kunlar){
    console.log(kun)
}

//21
const sinflar = [
    { sinf: "A", oquvchilar: ["Ali", "Vali"] },
    { sinf: "B", oquvchilar: ["Hasan", "Husan", "Anvar"] },
    { sinf: "C", oquvchilar: ["Lola"] }
];
const oquvchilar = [];

for(let sinf of sinflar){
    for(let oquvchi of sinf.oquvchilar){
        oquvchilar.push(oquvchi)
    }
}

console.log(oquvchilar)

//22
const sozlar = ['Hurmatli', 'ota', 'onalar.', 'Assalomu alaykum!'];
let str = '';

for(let soz of sozlar){
    str = str+'-'+soz
}

console.log(str)