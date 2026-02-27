let nums = [100, 4, 200, 1, 3, 2];

function longLength(nums) {
    nums.sort((a, b) => a - b);
    let count = 1;
    let max = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            count++
        } else {
            count = 1;
        }
        if(count>max){
            max=count;
        }
    }
    return max;
}

console.log(longLength(nums))