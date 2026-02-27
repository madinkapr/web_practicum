// Topshiriq 1: Mahsulot narxini hisoblash
function calculatePrice(basePrice){
    return function(discountPercent){
        return function(taxPercent){
            let chegirma = basePrice*discountPercent/100;
            let chegirmaFoiz = basePrice-chegirma;
            let soliq = chegirmaFoiz*taxPercent/100;
            let result = chegirmaFoiz+soliq;
            return result;
        }
    }
}

console.log(calculatePrice(1000)(10)(15))

// Topshiriq 2: Oddiy kalkulyator
function calculate(num1,num2,operation,callback){
    let natija;
    switch(operation){
        case 'add': natija = num1+num2; break;
        case 'subtract':  natija = num1-num2;break; 
        case 'multiply': natija = num1*num2; break;
        case 'divide': natija = num1/num2;break; 
        default: natija = 'Hisoblab bolmaydi!'
    }
    
    callback(natija)
}

calculate(10,5,'subtract', function(natija){
    console.log('Natija:',natija)
})


// Topshiriq 3: Sonlar yig'indisi

function sum(n){
    if(n===1) return 1;
    return n+sum(n-1)
}

console.log(sum(5)) 

// Topshiriq 4: Massiv elementlarini chiqarish
function printArray(arr,index=0){
    if(index === arr.length ) return;
    console.log(arr[index])
    return printArray(arr,index+1)
}

printArray(['olma','banan', 'nok', 'uzum'],0)