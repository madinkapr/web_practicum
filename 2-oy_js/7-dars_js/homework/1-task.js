// 1-topshiriq. Faktorial hisoblash
function solveFactorial(n){
    let factor = 1;
    for(let i=n; i>1; i--){
        factor*=i;
    }
    return `${n}! = ${factor}`;
}

console.log(solveFactorial(5))

// 2-topshiriq. Fibonachchi ketma-ketligi
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function printFib(count) {
  for (let i = 0; i < count; i++) {
    console.log(fib(i));
  }
}

printFib(5);

// 3-topshiriq. Sonlarni qo'shish (1 dan n gacha)
function sum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum+=i
    }
    return sum
}
console.log(sum(5))

// recursive
function sum(n){
    if(n===1) return 1;
    return n+sum(n-1);
}

console.log(sum(5))

// 4-topshiriq Palindrom tekshirish
function palindrom(str){
    str = str.toString();
    let reverse = '';
    for(let i=str.length-1; i>=0;i--){
        reverse+=str[i]
    }
    return reverse===str
}
console.log(palindrom(121))

// recursive
function palindrom(str){
    str = str.toString();
    if(str[0]===str[str.length-1]) return true;
    if(str[0]!==str[str.length-1]) return false;
   
    return palindrom(str)
}

console.log(palindrom(121))

// 5-topshiriq Massivdagi eng katta elementni topish
function findMax(arr){
    if(arr.length == 1) return arr[0];
    let first = arr[0];
    let next = findMax(arr.slice(1));
    if(first>next){
        return first
    }else{
        return next
    }
}

console.log(findMax([4,8,12,3]))

// 6-topshiriq Geometric progression

function findGeoProgress(current,count){
    if(count===0) return;
    console.log(current) ;
    findGeoProgress(current*3,count-1)
}

findGeoProgress(2,4)