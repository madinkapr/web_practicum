function has(array, son){
    const arr = new Set(array);
    if(arr.has(son)==true){
        return true
    }else{
        return false
    }
}

console.log(has([1,2,3],2))