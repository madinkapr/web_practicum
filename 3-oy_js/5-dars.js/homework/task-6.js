function lengthSubstr(str){
    let max = 0
    for(let i=0;i<str.length;i++){
        let substr = '';
        for(let j=i; j<str.length;j++){
            if(substr.includes(str[j])){
                break;
            }
            substr += str[j];
        }
        
        if (substr.length>max){
            max=substr.length
        }
    }
    return max
}

console.log(lengthSubstr('abcabcbb'))