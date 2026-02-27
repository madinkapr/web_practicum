function myFunc(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===0){
            let removed = arr.splice(i,1)[0];
            arr.push(removed);
        }
    }
    return arr
}
let nums = [0,1,0,3,12];
console.log(myFunc(nums));