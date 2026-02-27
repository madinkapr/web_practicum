let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function rotateRight(nums,k){
    return nums.slice(-k).concat(nums.slice(0,-k))

}

console.log(rotateRight(nums, k))