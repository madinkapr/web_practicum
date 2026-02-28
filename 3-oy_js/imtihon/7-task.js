function vowels(str){
    let count = 0;
    let unli = ['a', 'u', 'i', 'o', 'e']
    for(let w of str){
        if(unli.includes(w)){
            count++
        }
    }
    return count
}

console.log(vowels('javascript'))