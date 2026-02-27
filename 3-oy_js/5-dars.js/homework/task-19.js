let num = 58;
function rim(num) {
    let result = '';

    while (num >= 50) { result += "L"; num -= 50; }   
    while (num >= 10) { result += "X"; num -= 10; }   
    while (num >= 5)  { result += "V"; num -= 5; }    
    while (num >= 1)  { result += "I"; num -= 1; }

    return result
}

console.log(rim(num))
