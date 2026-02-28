let str = "AaB"
count ={}
let str1 = str.toLowerCase()
for(let s of str1){
    if(count[s]){
        count[s]++
    }else{
        count[s]=1
    }
}

console.log(count)