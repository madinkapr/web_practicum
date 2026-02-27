let  strs = ["flower","flow","flight"];

function prefix(arr){
    let prefix = strs[0];
    
    for(let w of strs){
        while(!w.startsWith(prefix)){
            prefix = prefix.slice(0,-1)
        }
    }
    return prefix
}

console.log(prefix(strs))