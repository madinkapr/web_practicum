// 1-misol
let son = 1;
while (son <= 10) {
    console.log(son++);
}

// 2-misol
let son = 1;
while (son <= 20) {
    if (son % 2 == 0) {
        console.log(son)
    }
    son++;
}

// 3-misol
let son = 1;
let sum = 0;
while (son <= 50) {
    sum += son;
    son++;
}
console.log(sum)

// 4-mashq
let son = 10;

while (son >= 1) {
    console.log(son--);
}

// 5-mashq
let son = +prompt('Son kiriting: ');
let sum = 1;
while (son) {
    sum *= son;
    son--;
}
console.log(sum);

// 6-mashq
const password = '1234';
while (true) {
    let parol = prompt('Parol kiriting: ');
    if (parol === password) {
        break;
    }
}

// 7-mashq
let raqam = 1234;
let sum = 0;
while (raqam) {
    let lastDigit = raqam % 10;
    sum += lastDigit;
    raqam = Math.floor(raqam / 10);
}
console.log(sum)

// 8-mashq

while (true) {
    let son = +prompt('Son kiriitng: ')
    if (son % son == 0 && son % 1 == 0) {
        console.log('Tub son')
        break;
    } else {
        console.log('Tub son emas')
    }
}

// 9-masala

let son = 1234;
let teskari = 0;

while (son) {
    let qoldiq = son % 10;
    teskari = teskari * 10 + qoldiq;
    son = Math.floor(son / 10);
}
console.log(teskari);

// 10-masala
let x = 1;
let cnt = 0;
let son = 6;
while(x<son){
    if(son%x == 0){
        cnt += x;
    }
    x++;
}
if(son==cnt){
    console.log('Mukammal son');
}else {
    console.log('Oddiy son');
}