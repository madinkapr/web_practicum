// 1-masala
let son = +prompt('Butun son kiriting: ');
let teskari = 0;
while (son) {
    let qoldiq = son % 10;
    teskari = teskari * 10 + qoldiq;
    son = Math.floor(son / 10);
}
console.log(teskari)

// 2-masala
let n = prompt('Son kiriting: ');
let son = 1;
let next = 1;
let fibo = 0;
let summa = 0;

console.log(son);
console.log(next);

while(true){
    fibo = son+next;
    if(fibo>=n) break;
    console.log(fibo);
    
    if(fibo%2==0){
        summa+=fibo;
    }
    
    son = next;
    next = fibo;
}

console.log('Summa', summa )


// 3-msala
let son = +prompt('Son kiriting: ');
let summa =0;
let son1 = son;
while(son1>0){
    let qoldiq = son1%10;
    summa+=qoldiq**3;
    son1 = Math.floor(son1/10);
}
console.log(summa)
console.log(summa===son);

// 4-masala

let son = +prompt('Son kiriting: ');

let son1 = son;
let teskarisi = 0;

while(son>0){
    let last = son%10;
    teskarisi = teskarisi*10+last;
    son = Math.floor(son/10);
}

console.log(teskarisi);

if(son1 !== teskarisi){
    console.log(false)
}else {
    console.log(true)
}

// 5-masala
let x = 48;
let y = 18;

let a= x;
let b = y;

while(x!==y){
    if(x>y){
         x= x-y;
    }
    if(y>x){
         y = y-x;
    }
}

if(x==y){
    console.log(`EKUB: ${x}`)
}

let EKUK = a*b/x;
console.log(`EKUK: ${EKUK}`);

// 6-masala

let son =+prompt('Son kiriting( 0-9999): ');
let result = "";
while(son>0){
    let raqam =son%10;
    son = Math.floor(son/10);
    
    let soz = "";

    switch (raqam) {
        case 0: soz = "nol"; break;
        case 1: soz = "bir"; break;
        case 2: soz = "ikki"; break;
        case 3: soz = "uch"; break;
        case 4: soz = "to'rt"; break;
        case 5: soz = "besh"; break;
        case 6: soz = "olti"; break;
        case 7: soz = "yetti"; break;
        case 8: soz = "sakkiz"; break;
        case 9: soz = "to'qqiz"; break;
    }
     result = `${soz} ${result}`;
}
console.log(result)

// 7-masala

let n1 = +prompt('1-son asos: ');
let n2 = +prompt('2-son daraja:');
let result = 1;
let i = 0;
while(i<n2){
    result = result*n1;
    i++;
}
console.log(result);

// 8-masala
let son = +prompt('son kiriting: ');
let juft ="";
let toq = "";
while(son>0){
    let last = son%10;
    son = Math.floor(son/10);
    if(last%2==0){
        juft+=last;
    }else {
        toq+=last
    }
}


console.log(juft);
console.log(toq);

// 9=masla

let son = +prompt('son kiriting: ');
let tub = 2;
let natija = "";
while(son>1){
    if(son%tub == 0){
        natija += `${tub} * `;
        son = son/tub
    }else {
        tub++
    }
}
natija = natija.slice(0,natija.length-3);
console.log(natija)

// Qolganlarini qilolmadim