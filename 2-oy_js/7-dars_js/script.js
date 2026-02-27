// 1-topshiriq
function calculatePrice(basePrice){
    return function(discountPercent){
        return function(taxPercent){
            let discount = basePrice - basePrice*discountPercent/100;
            let tax = discount*taxPercent/100
            return tax+discount
        }
    }
}

console.log(calculatePrice(1000)(10)(15));

// 2-topshiriq

function calculate(a,b,operation){
    function add(){
        return a+b;
    }
    
    function subtract(){
        return a-b;
    }
    
    function multiply(){
        return a*b;
    }
    
    function divide(){
        return a/b;
    }
    
    
    switch(operation){
        case 'add':
            answer = add();
            break;
        case 'subtract':
            answer = subtract();
            break;
        case 'multiply':
            answer = multiply();
            break;
        case 'divide':
            answer = divide()
            break;
        }
    return answer;
}
console.log(calculate(5,6,'add'))
