// 1-misol
function residue(n){
    if(n%5==0){
        return 'yes';
    } else{
        return 'No'
    }
}
console.log(residue(13))

// 2-misol

function numberToText(n){
    let result = '';
    
    let ming= Math.floor(n/1000);
    let yuz= Math.floor((n%1000)/100);
    let on = Math.floor((n%100)/10);
    let birlik = n%10;
    
    if(n>9999){
        return -1
    }
    
    switch(ming){
        case 1: result += "bir ming "; break;
        case 2: result += "ikki ming "; break;
        case 3: result += "uch ming "; break;
        case 4: result += "to'rt ming "; break;
        case 5: result += "besh ming "; break;
        case 6: result += "olti ming "; break;
        case 7: result += "yetti ming "; break;
        case 8: result += "sakkiz ming "; break;
        case 9: result += "to'qqiz ming "; break;
    }
        
    switch(yuz){
        case 1: result += "bir yuz "; break;
        case 2: result += "ikki yuz "; break;
        case 3: result += "uch yuz "; break;
        case 4: result += "to'rt yuz "; break;
        case 5: result += "besh yuz "; break;
        case 6: result += "olti yuz "; break;
        case 7: result += "yetti yuz "; break;
        case 8: result += "sakkiz yuz "; break;
        case 9: result += "to'qqiz yuz "; break;
    }
    
    switch(on){
        case 1: result += "o'n "; break;
        case 2: result += "yigirma "; break;
        case 3: result += "o'ttiz "; break;
        case 4: result += "qirq "; break;
        case 5: result += "ellik "; break;
        case 6: result += "oltmish "; break;
        case 7: result += "yetmish "; break;
        case 8: result += "sakson "; break;
        case 9: result += "to'qson "; break;
    }
    
    switch(birlik){
        case 1: result += "bir"; break;
        case 2: result += "ikki"; break;
        case 3: result += "uch"; break;
        case 4: result += "to'rt"; break;
        case 5: result += "besh"; break;
        case 6: result += "olti"; break;
        case 7: result += "yetti"; break;
        case 8: result += "sakkiz"; break;
        case 9: result += "to'qqiz"; break;
    }
    
    return result;
    
}

console.log(numberToText(+prompt('son kiriting: ')))


// 3-misol
function sumNumbersDivision(){
    for(let i=10; i<=99; i++){
        let y=i%10+Math.floor(i/10);
        if(i%y==0){
           console.log(i)
       }
    }
}

sumNumbersDivision()


// 4-misol
let clavinToSelsiy = n =>{
    return n-273.15;
}

console.log(clavinToSelsiy(200))

// 5-misol
let dollar = 12400;
function convertToSum(sum){
    return dollar*sum;
}
console.log(convertToSum(200))

// 6-masala

function even(){
    for(let i=0; i<=56; i+=2){
        console.log(i);
    }
}

even()

// 7-masala
function summa(n){
    let sum = 0;
    for(let i=1; i<=n;i++){
        sum+=i;
    }
    return sum
}
console.log(summa(5))


// 8-masala

function getDivision(n){
    for(let i=1; i<=n; i++){
        if(n%i==0){
            console.log(i);
        }
    }
}

getDivision(12)


// 9-masala

function calcCube(n){
    for(let i=1; i<=n; i++){
        console.log(`${i} -> ${i**3}`) 
    }
   
}

calcCube(4);


// 10-masala
function piramid(){
    for(let i=1; i<=5;i++){
        let line ="";
        for(let j=1;j<=i; j++){
            line+="*"
        }
        console.log(line)
    }
}

piramid()