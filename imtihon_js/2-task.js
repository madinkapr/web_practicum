let nums = [3, 5, 3, 2, 5, 3, 5, 5];

let count = {};

for(let num of nums){
  if(countMax[num]){
    countMax[num]++
  }else{
     countMax[num]=1
  }
}

console.log(countMax)