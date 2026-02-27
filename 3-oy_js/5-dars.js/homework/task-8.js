function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const a = s.split('').sort().join('');
    const b = t.split('').sort().join('');
    
    return a===b
}

let s = "anagram"
let t = "nagaram"

console.log(isAnagram(s,t))