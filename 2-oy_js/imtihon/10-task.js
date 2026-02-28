const input = " JS2025developer ";

const joy = input.trim().split('');
let result = '';

for (let item of joy) {
  if (!isNaN(item)) {   
    result += item;
  }
}

console.log(Number(result));

if(result>=2025){
  console.log("Future raedy")
}else{
  console.log('Need update')
}


