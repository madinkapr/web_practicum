// 1
let son = [5, 2, 9, 1, 7, 6];
console.log(son.sort((a,b)=>b-a));
console.log(son[0]+son[1]);

console.log(son.sort(a-b))

//2
const nums = [1, 2, 3, 2, 1];
console.log(nums===nums.reverse())

 //3
const nums = [4, 5, 1, 2, 5, 4, 3];
for(let i=0; i<=nums.length-1; i++){
    if(nums.indexOf(nums[i])===nums.lastIndexOf(nums[i])){
        console.log(nums[i])
        break;
    }
}