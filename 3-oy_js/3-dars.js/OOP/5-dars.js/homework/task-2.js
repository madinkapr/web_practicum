let nums = [4, 1, 2, 1, 2];

function findSpecial(nums) {
    for (num of nums) {
        if (nums.indexOf(num) === nums.lastIndexOf(num)){
            return num;
        }
    }
}

console.log(findSpecial(nums))