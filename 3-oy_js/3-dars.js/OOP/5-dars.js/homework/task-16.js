let nums = [-2,1,-3,4,-1,2,1,-5,4]

function sum(arr){
    let max = nums[0];

    for(let i=0;i<arr.length;i++){
        let sum = 0;

        for(let j=i; j<arr.length;j++){
            sum+=arr[j];
            if(sum>max){
                max=sum
            }
        }
    }
    return max
}


console.log(sum(nums))