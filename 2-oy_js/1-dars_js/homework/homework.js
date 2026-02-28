// 1. Mavsumlarni aniqlash

// let month = prompt('Oy raqamini kiriting (1-12): ');

// if(month==12 || month==1 || month==2){
//     console.log('Qish');
// } else if(month==3 || month==4 || month==5){
//     console.log("Bahor");
// }else if(month==6 || month==7 || month==8){
//     console.log("Yoz");
// }else if (month==9 || month==10 || month==11){
//     console.log("Kuz");
// } ------------------------------------------------------------------

// 2. Yoshga qarab toifa aniqlash

// let age = prompt('Yoshizni kiriting: ');

// if(age>0 && age<=2){
//     console.log('Chaqaloq');
// } else if(age>=3 && age<=6){
//     console.log("Maktabgacha");
// } else if(age>=7 && age<=17){
//     console.log('Maktab o\'quvchisi');
// } else if(age>=17 && age<=25){
//     console.log('Talaba');
// } else if(age>=26 && age<=60){
//     console.log('Ishchi');
// } else {
//     console.log('Pensioner')
// }------------------------------------------------------------------

// 3. Harorat bo'yicha maslahat

// let temp =  prompt('Haroratni kiriting: ');
// if(temp<-20){
//     console.log("Tashqariga chiqmang!");
// } else if(temp>=-20 && temp<0  ){
//     console.log( "Issiq kiyining");
// } else if(temp>=0 && temp<=15){
//     console.log('Kurtka kerak!');
// } else if(temp>15 && temp<=25){
//     console.log('Yengil kiyim kifoya');
// }else if(temp>25){
//     console.log("Issiq, soyada yuring");
// }-----------------------------------------------------------------------

// 4. Uchburchak turini aniqlash

// let a = +prompt('1 tomonni kiriting: ');
// let b = +prompt("2 tomonni kiriting: ");
// let c = +prompt('3 tomonni kiriting: ');

// let True = a + b > c && b + c > a && a + c > b;

// if (!True) {
//     console.log('Uchburchak mavjud emas');
// } else {
//     if (a === b && b === c) {
//         console.log('Teng tomonli');
//     } else if (a === b || b === c || a === c) {
//         console.log('Teng yonli');
//     } else {
//         console.log('Turli tomonli');
//     }
// }----------------------------------------------------------------------

// 5. Imtihon baholash tizimi

// let ball = prompt('Ball (0-100) kiriting: ');
// if(ball>=90&& ball<=100 ){
//     console.log('"A" - Ajoyib!');
// } else if(ball>=80 && ball<=89){
//     console.log('"B" - Yaxshi')
// } else if(ball>=70 && ball<=79){
//     console.log(' "C" - Qoniqarli')
// } else if(ball>=60 && ball<=69){
//     console.log(' "D" - Yetarli')
// } else if( ball>=0 && ball<=59){
//     console.log('"F" - Qoldingiz, ko\'proq o\'qing!')
// }-------------------------------------------------------------------

// 6. Yil kabisakmi tekshirish (oson)

// let year = prompt('Yil kiriting: ');

// if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
//     console.log('Kabisa yili');
// } else {
//     console.log('Kabisa yili emas')
// }------------------------------------------------------------------

// 7. Pul almashish kalkulatori

// let pul= prompt('Pul miqdorini kiriting ($): ');
// let valyuta= prompt('valyuta turini kiriting (USD, EUR, RUB): ');

// let usd = 12500;
// let eur = 13700;
// let rub = 130;

// if(valyuta == 'usd'){
//     console.log(pul*usd)
// }else if(valyuta == 'eur'){
//     console.log(pul*eur)
// }else if(valyuta == 'rub'){
//     console.log(pul*rub)
// }

// if(pul<=100){
//     console.log(`100$ dan kam bolgani uchun 2% komissiya olindi:${pul*usd*0.98} so'm`)
// }

// ----------------------------------------------------------------------------------------------

// 8. BMI (tana massasi indeksi) kalkulatori

// let h = prompt('Bo\'yni kiriting(m da): ');
// let m = prompt('Og\'irlikni kiriting(kg da): ');

// let BMI = m/h**2;

// if(BMI<18.5){
//     console.log('Kam vazn');
// }else if(BMI>=18.5 && BMI<=24.9){
//     console.log('Normal');
// } else if (BMI>=25 && BMI<=29.9){
//     console.log('Ortiqcha vazn');
// }else if(BMI>=30){
//     console.log('semizlik')
// }----------------------------------------------------------------------------------------------

// 9. Elektr energiya hisob-kitobi

// let elektr= prompt('Foydalanilgan elektr energiya (kWt/soat) kiriting: ');
// let summa = 0;

// if(elektr>0 && elektr<=100){
//     summa = elektr*450;
// }else if(elektr>=101 && elektr<=300){
//     summa = elektr*550;
// }else if(elektr>=301){
//     summa = elektr*650;
// }

// console.log(`Jami summa: ${summa} so'm`)-----------------------------------------------------------------------------------------------------------



// 10. Parol kuchini tekshirish

// let parol = prompt('Parol kiriting: ');

// function hasSymbol(str) {
//     let symbols = "!@#$%^&*()_+-={}[]|:;'<>?,./";

//     for (let i = 0; i < str.length; i++) {
//         if (symbols.includes(str[i])) {
//             return true;    
//         }
//     }

//     return false;          
// }

// function hasDigit(str) {
//     let digits = "0123456789";

//     for (let i = 0; i < str.length; i++) {
//         if (digits.includes(str[i])) {
//             return true;   
//         }
//     }

//     return false;          
// }

// if(parol.length<6){
//     console.log('Juda Zaif');
// }else if(parol.length>=6 && parol.length<=8){
//     console.log('Zaif');
// }else if(parol.length>8 && parol.length<=10 && hasDigit(parol)){
//     console.log("O'rtacha");
// }else if(parol.length>10 && hasDigit(parol) && hasSymbol(parol)){
//     console.log("Kuchli");
// }



// ****************************************************Screensho******************************************************

// if1
// let number = 5;
// if(number>0){
//     console.log(number+=1)
// }else {
//     console.log(number);
// }

// // if2
// let number1 = -5;
// if(number1>0){
//     console.log(number+=1)
// }else {
//     console.log(number1-=2);
// }

// // if3
// let number2 = 0;
// if(number2>0){
//     console.log(number2+=1)
// } else if(number2<0){
//     console.log(number2-=2)
// }else if(number2==0){
//     console.log(number2 = 10);
// }

// // if4
// let num1 = 1;
// let num2 = -6;
// let num3 = 3;

// let count = 0;

// if(num1>0){
//     count++;
// } 
// if(num2>0){
//     count++;
// }
// if(num3>0){
//     count++;
// }


// console.log(count);

// //if5
// let n1 = 3;
// let n2 = 9;
// let n3 = -4;

// let count_musbat = 0;
// let count_manfiy = 0;

// if(n1>0){
//     count_musbat++;
    
// }else if(n1<0){
//     count_manfiy++;
// }
// if(n2>0){
//     count_musbat++;
// }else if(n2<0){
//     count_manfiy++;
// }
// if(n3>0  ){
//     count_musbat++;
    
// }else if(n3<0){
//     count_manfiy++;
// }

// console.log(`Musbat sonlar soni: ${count_musbat}`);
// console.log(`Manfiy sonlar soni: ${count_manfiy}`);


// // if6
// let a = 2;
// let b = 5;
// if(a>b){
//     console.log(a);
// } else if(b>a){
//     console.log(b);
// }

// // if7
// let a = 4;
// let b = 9;

// if(a<b){
//     console.log(1);
// } else if(b<a){
//     console.log(2)
// }

// // if8
// let a = 4;
// let b = 9;

// if(a>b){
//     console.log(a, b);
// } else if(b>a){
//     console.log(b, a);
// }

// // if9
// let a = 9.9;
// let b = 7.5;

// if(a>b){
//     let x = a;
//     a = b;
//     b= x;
    
//     console.log(`a=${a}, b=${b}`);
// } 

// // if10
// let a = 4;
// let b = -6;

// if(a!==b){
//     let summa = a+b;
//     a=summa;
//     b=summa;
// }else if(a==b) {
//     a = 0;
//     b= 0;
// }

// console.log(a, b)

// // if11
// let a = 4;
// let b = -6;
// if(a!==b){
//     if(a>b){
//         b=a;
//     }
// }else if(a==b) {
//     a = 0;
//     b= 0;
// }

// console.log(a, b)

// // f12
// let n1 = 2;
// let n2 = 7;
// let n3 = 9;

// if(n1<n2 && n1<n3){
//     console.log(n1)
// }else if(n2<n1 && n2<n3){
//     console.log(n2)
// }else if(n3<n2 && n3<n1){
//     console.log(n3)
// }else {
//     console.log('Kichik son yo\'q')
// }


// // f13
// let n1 = 2;
// let n2 = 7;
// let n3 = 9;

// if((n1>n2 && n1<n3) || (n1>n3 && n1<n2)){
//     console.log(n1)
// }else if((n2>n1 && n2<n3) || (n2>n3 && n2<n1)){
//     console.log(n2)
// }else if((n3>n1 && n3<n2) || (n3>n2 && n3<n1)){
//     console.log(n3)
// }else {
//     console.log('o\'rtacha son yo\'q')
// }

// // f14
// let n1 = 4;
// let n2 = 3;
// let n3 = 1;

// let min;
// let max ;

// if(n1<=n2 && n1<=n3){
//     min = n1;
// }else if(n2<=n1 && n2<=n3){
//     min = n2;
// } else if(n3<=n1 && n3<=n2){
//     min = n3;
// }

// if(n1>=n2 && n1>=n3){
//     max = n1;
// } else if(n2>=n1 && n2>=n3){
//     max= n2;
// } else if(n3>=n1 && n3>=n2){
//     max=n3;
// }

// console.log(`Min: ${min}`)
// console.log(`Max: ${max}`)

// // f15

// let n1 = 1;
// let n2 = 6;
// let n3 = 9;

// if(n1+n2>=n1+n3 && n1+n2>=n2+n3){
//     console.log(n1,n2)
// }else if(n1+n3>=n1+n2 && n1+n3>=n2+n3){
//     console.log(n1,n3)
// }else {
//     console.log(n2,n3)
// }