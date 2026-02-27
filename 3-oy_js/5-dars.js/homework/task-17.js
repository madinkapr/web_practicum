let nums = [1,2,3,4] 

function multiply(nums){
    let result = [];
    for(let i=0;i<nums.length;i++){
        let multi = 1;

        for(j=0; j<nums.length;j++){
            if(i!==j){
                multi*= nums[j];
            }
        }
        result.push(multi)
    }
    return result
}

console.log(multiply(nums))