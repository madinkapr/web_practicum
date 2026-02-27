let nums = [1,2,3,2,1,4];

function special(nums){
    return nums.filter((item)=>nums.indexOf(item)===nums.lastIndexOf(item));
}

console.log(special(nums))