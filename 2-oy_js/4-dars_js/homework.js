// Declaration function

// 1. Berilgan ikki sondan kattasini topish
// declaration function
function findMax(num1, num2) {
    if (num1 > num2) {
        console.log(num1)
    } else if (num1 == num2) {
        console.log(`${num1}=${num2}`)
    }
    else {
        console.log(num2)
    }
}

findMax(10, 25);

// expression function

const findMax = function (num1, num2) {
    if (num1 > num2) {
        console.log(num1)
    } else if (num1 == num2) {
        console.log(`${num1}=${num2}`)
    }
    else {
        console.log(num2)
    }
}

findMax(10, 10);

// arrow function

const findMax = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1)
    } else if (num1 == num2) {
        console.log(`${num1}=${num2}`)
    }
    else {
        console.log(num2)
    }
}

findMax(10, 23);

// ********************************************************************************************************************************
// 2. Belgini unli yoki undosh harf ekanligini aniqlash
// declaration function
function isVowel(ch) {
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == "o'") {
        return 'Unli harf';
    } else {
        return 'Undosh harf';
    }
}

console.log(isVowel('o\''))

// expression function
let isVowel = function (ch) {
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == "o'") {
        return 'Unli harf';
    } else {
        return 'Undosh harf';
    }
}

console.log(isVowel('a'))

// arrow function
let isVowel = ch => {
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == "o'") {
        return 'Unli harf';
    } else {
        return 'Undosh harf';
    }
}

console.log(isVowel('u'))

// ********************************************************************************************************************************
// 3. Foydalanuvchining yoshiga qarab toifasini aniqlash
// declaration function

function ageCategory(age) {
    if (age > 0 && age <= 1) {
        return 'Chaqaloq';
    }
    else if (age >= 2 && age <= 6) {
        return 'Bola';
    }
    else if (age >= 7 && age <= 18) {
        return "O'smir";
    }
    else if (age > 18 && age <= 30) {
        return 'Yoshlar';
    }
    else if (age >= 31 && age <= 59) {
        return 'Kattalar';
    }
    else {
        return 'Qariyalar';
    }
}

console.log(ageCategory(prompt('Yoshizni kiriting iltimos! Toifezni aniqlab beraman...: ')));


// expression function
const ageCategory = function (age) {
    if (age > 0 && age <= 1) {
        return 'Chaqaloq';
    }
    else if (age >= 2 && age <= 6) {
        return 'Bola';
    }
    else if (age >= 7 && age <= 18) {
        return "O'smir";
    }
    else if (age > 18 && age <= 30) {
        return 'Yoshlar';
    }
    else if (age >= 31 && age <= 59) {
        return 'Kattalar';
    }
    else {
        return 'Qariyalar';
    }
}

console.log(ageCategory(prompt('Yoshizni kiriting iltimos! Toifezni aniqlab beraman...: ')));


// arrow function
const ageCategory = age => {
    if (age > 0 && age <= 1) {
        return 'Chaqaloq';
    }
    else if (age >= 2 && age <= 6) {
        return 'Bola';
    }
    else if (age >= 7 && age <= 18) {
        return "O'smir";
    }
    else if (age > 18 && age <= 30) {
        return 'Yoshlar';
    }
    else if (age >= 31 && age <= 59) {
        return 'Kattalar';
    }
    else {
        return 'Qariyalar';
    }
}

console.log(ageCategory(prompt('Yoshizni kiriting iltimos! Toifezni aniqlab beraman...: ')));

// ********************************************************************************************************************************

// 4. Son 3 ga va 5 ga bo‘linishini tekshirish
// Declaration func
function checkDivisibility(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("3 va 5 ga bo'linadi.")
    } else {
        console.log("3 va 5 ga bo'linadigan son kiriting!")
    }
}
checkDivisibility(15)

// expression func
let checkDivisibility = function (num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("3 va 5 ga bo'linadi.")
    } else {
        console.log("3 va 5 ga bo'linadigan son kiriting!")
    }
}
checkDivisibility(20)

// arrow function
let checkDivisibility = num => {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("3 va 5 ga bo'linadi.")
    } else {
        console.log("3 va 5 ga bo'linadigan son kiriting!")
    }
}

checkDivisibility(15)

// ********************************************************************************************************************************

// 5. Berilgan sonning raqamlari faqat o‘sish tartibida joylashgan bo‘lsa, "Raqamlar o'sish tartibida" deb qaytaring, aks holda "Raqamlar tartibsiz" deb qaytaring.
// declaration func
function checkIncreasingOrder(num) {
    let num1 = 10;
    while (num > 0) {
        let num2 = num % 10;
        if (num2 > num1) {
            return "Tartibsiz"
        }
        num1 = num2;
        num = Math.floor(num / 10)
    }
    return "O'sish tartibida";
}

console.log(checkIncreasingOrder(4321))

// expression func
let checkIncreasingOrder = function (num) {
    let num1 = 10;
    while (num > 0) {
        let num2 = num % 10;
        if (num2 > num1) {
            return 'Tartibsiz'
        }
        num1 = num2;
        num = Math.floor(num / 10);
    }
    return "O'sish tartibida"
}
console.log(checkIncreasingOrder(1234))

// arrow func
let checkIncreasingOrder = num => {
    let num1 = 10;
    while (num > 0) {
        let num2 = num % 10;
        if (num2 > num1) {
            return 'Tartibsiz'
        }
        num1 = num2;
        num = Math.floor(num / 10);
    }
    return "O'sish tartibida"
}

console.log(checkIncreasingOrder(1234))





// ************************
// Expression function
// ************************

// Masala 1: Berilgan sonni 10 ga bo'ling. Agar qoldiq 0 bo'lsa, sonni 2 ga bo'ling, aks holda 3 ga ko'paytiring.
let calculate = function (number) {
    if (number % 10 == 0) {
        return `${number / 2} (${number} ning qoldig'i 0, shuning uchun ${number} ni 2 ga bo'lamiz, natija ${number / 2} bo'ladi.)`
    } else {
        return `${number * 3} (${number} ning qoldig'i bor, shuning uchun ${number} ni 3 ga ko'paytiramiz, natija ${number * 3} bo'ladi.)`
    }
}

console.log(calculate(50))

// declaration func
function calculate(number) {
    if (number % 10 == 0) {
        return `${number / 2} (${number} ning qoldig'i 0, shuning uchun ${number} ni 2 ga bo'lamiz, natija ${number / 2} bo'ladi.)`
    } else {
        return `${number * 3} (${number} ning qoldig'i bor, shuning uchun ${number} ni 3 ga ko'paytiramiz, natija ${number * 3} bo'ladi.)`
    }
}

console.log(calculate(50))

// arrow func
let calculate = number => {
    if (number % 10 == 0) {
        return `${number / 2} (${number} ning qoldig'i 0, shuning uchun ${number} ni 2 ga bo'lamiz, natija ${number / 2} bo'ladi.)`
    } else {
        return `${number * 3} (${number} ning qoldig'i bor, shuning uchun ${number} ni 3 ga ko'paytiramiz, natija ${number * 3} bo'ladi.)`
    }
}

console.log(calculate(50))

// ********************************************************************************************************************************

// Masala 2: Sonni boshidan va oxiridan tekshirish

let isSymmetricNumber = function (num) {
    let last = num % 10;
    let first = Math.floor((num % 1000) / 100);
    if (last == first) {
        return 'True'
    } else {
        return 'False'
    }
}
console.log(isSymmetricNumber(494));

// declaration func

function isSymmetricNumber(num) {
    let last = num % 10;
    let first = Math.floor((num % 1000) / 100);
    if (last == first) {
        return 'True'
    } else {
        return 'False'
    }
}
console.log(isSymmetricNumber(144));


// arrow func

let isSymmetricNumber = num => {
    let last = num % 10;
    let first = Math.floor((num % 1000) / 100);
    if (last == first) {
        return 'True'
    } else {
        return 'False'
    }
}

console.log(isSymmetricNumber(121));

// ********************************************************************************************************************************

// Masala 3: To'g'ri burchakli uchburchakning perimetrini hisoblash
let calcPerimeter = function (a, b) {
    let c = (a ** 2 + b ** 2) ** (1 / 2);
    return a + b + c;
}

console.log(calcPerimeter(5, 12))


// decleration func
function calcPerimeter(a, b) {
    let c = (a ** 2 + b ** 2) ** (1 / 2);
    return a + b + c;
}

console.log(calcPerimeter(5, 12))

// arrow function
let calcPerimeter = (a, b) => {
    let c = (a ** 2 + b ** 2) ** (1 / 2);
    return a + b + c;
}

console.log(calcPerimeter(5, 12))





// ***************************
// Arrow function
// ***************************

// Masala 1: Sonni teskari tartibda chiqarish
let reverseNum = num => {
    let reverse = 0;
    while(num>0){
        let last = num % 10;
        reverse = reverse * 10 + last;
        num = Math.floor(num / 10);
        
    }
    return reverse;
}
console.log(reverseNum(12345))

// declaration func
function reverseNum(num){
    let reverse = 0;
    while(num>0){
        let last = num % 10;
        reverse = reverse * 10 + last;
        num = Math.floor(num / 10);
        
    }
    return reverse;
}
console.log(reverseNum(12345))

// expression func
let reverseNum = function (num){
    let reverse = 0;
    while(num>0){
        let last = num % 10;
        reverse = reverse * 10 + last;
        num = Math.floor(num / 10);
        
    }
    return reverse;
}


// Masala 2: Kuchli Sonni aniqlash (oddiy variant)

let isStrongNum = num =>{
    let sum =0;
    let org_num = num;
    while(num>0){
        let last = num%10;
        sum +=last**3
        num = Math.floor(num/10);
    }
    if(sum==org_num){
        return 'True'
    }else{
        return 'False'
    }
}

console.log(isStrongNum(153));


// declaration func
function isStrongNum(num){
    let sum =0;
    let org_num = num;
    while(num>0){
        let last = num%10;
        sum +=last**3
        num = Math.floor(num/10);
    }
    if(sum==org_num){
        return 'True'
    }else{
        return 'False'
    }
}

console.log(isStrongNum(153));


// expression func
let isStrongNum = function(num){
    let sum =0;
    let org_num = num;
    while(num>0){
        let last = num%10;
        sum +=last**3
        num = Math.floor(num/10);
    }
    if(sum==org_num){
        return 'True'
    }else{
        return 'False'
    }
}
console.log(isStrongNum(153));


// Masala 3: Raqamlar yig'indisini hisoblash

let calcSumma = num =>{
    let sum = 0;
    while(num>0){
        let last = num%10;
        sum+=last;
        num = Math.floor(num/10)
    }
    return sum
}
console.log(calcSumma(1234));

// declaration func

function calcSumma(num){
    let sum = 0;
    while(num>0){
        let last = num%10;
        sum+=last;
        num = Math.floor(num/10)
    }
    return sum
}
console.log(calcSumma(1234));


// expression func

let calcSumma = function(num){
    let sum = 0;
    while(num>0){
        let last = num%10;
        sum+=last;
        num = Math.floor(num/10)
    }
    return sum
}

console.log(calcSumma(1234));
