let scores = [78, 85, 92, 88];

let sum = scores.reduce((acc,item)=>item+acc)
let avarage = sum/scores.length
if(avarage>=90){
  console.log('Excellent')
}else if(avarage>=80){
  console.log('Good')
}else{
  console.log(avarage)
}