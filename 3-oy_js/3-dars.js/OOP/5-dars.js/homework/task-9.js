function findMin(arr) {
    let x=1;
    while(arr.includes(x)){
        x++;
    }

    return x;    
}
let nums = [3, 4, -1, 1]

console.log(findMin(nums))