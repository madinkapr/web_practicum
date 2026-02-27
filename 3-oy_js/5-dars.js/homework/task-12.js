let nums = [1,1,1,2,2,3];

function loop(nums){
    let count = 0
    let max = nums[0]
    let maxCount = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            count++
        }else{
            count=0
        }
    }
    if(count>maxCount){
        maxCount=count;
        max=nums[i]
    }
    return max
}

console.log(loop(nums))