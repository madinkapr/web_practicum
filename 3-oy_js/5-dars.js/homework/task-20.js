let s = "MCMXCIV"

function toInteger(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "C" && s[i + 1] === "M") {
            result += 900; i++;
        }
        else if (s[i] === "X" && s[i + 1] === "C") {
            result += 90; i++;
        }
        else if (s[i] === "I" && s[i + 1] === "V") {
            result += 4; i++;
        }
        else if (s[i] === "M") {
            result += 1000;
        }
        else if (s[i] === "C") {
            result += 100;
        }
        else if (s[i] === "X") {
            result += 10;
        }
        else if (s[i] === "V") {
            result += 5;
        }
        else if (s[i] === "I") {
            result += 1;
        }
    }
    return result
}

console.log(toInteger(s))