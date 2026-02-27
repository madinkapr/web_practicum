let s = "leetcode";

function findFirstChar(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1]) {
            count++
            return s[i]
        } else {
            count = 0;
        }
    }
}

console.log(findFirstChar(s))