// // 1-masala
// for(let i=0; i<=56; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// // 2-masala
// for(let i =1; i<=5; i++){
//     let qator = '';
//     for(let j=1; j<=i; j++){
//         qator+="*"
//     }
//     console.log(qator)
// }

// // 3-masala
// let n1 = 0;
// let n2 = 1;

// for(let i=0; i<10; i++){
//     console.log(n1);
//     let next = n1+n2;
//     n1 = n2;
//     n2=next;
    
// }

// // 4-masala
// let son = +prompt('son kiriitng faktorialini topib beraman: ')
// let factorial = 1;
// for(let i = 1; i<=son; i++){
//     factorial *= i
// }
// console.log(`${son}! factoriali ${factorial}`)


// // 5-masala
// let num = prompt('Sonni kiriting: ');
// let sum = 0;
// for(let i=0; i<num.length; i++){
//     sum+=+num[i];
// }
// console.log(sum)

// // 6-masala
// let n = +prompt('Son kiriitng: ');
// let sum = 0;
// let count = 0;
// for(let i=1; i<n; i++){
//     if(i%3==0 && i%7!==0){
//         sum+=i;
//         count++
//     }
// }

// console.log(sum);
// console.log(count);

// // 7-masala
// let H = prompt('Piramida balandligini kiriting: ');

// for(i=1; i<=H; i++){
//     let space = '';
//     for(j=0; j<H-i; j++){
//         space+=" ";
//     }
    
//     let str = '';
//     for(z=0; z<2*i-1; z++){
//         str+='*';
//     }
    
//     console.log(space + str);
// }

// // ********************************************************************************************************

// // for1
// let k = +prompt('k sonni kiriting: ');
// let n = +prompt('n sonni kiriitng ');

// for(let i=0; i<n; i++){
//     console.log(k);
// }

// // for2
// let a = -1;
// let b = 10;

// let count = 0;

// for(let i=a; i<=b; i++){
//     console.log(i);
//     count++;
// }
// console.log(`Count:${count}`);

// // for3
// let a = -1;
// let b = 10;

// let cnt = 0;

// for(let i=b-1; i>a; i--){
//     console.log(i);
//     cnt++;
// }

// console.log(`count: ${cnt}`);

// // for4
// let cost = 12.5;

// for(let i=1; i<10; i++){
//     console.log(`${i} kg konfet ${cost*i} kg`);
// }

// // for5

// let cost = 20.1;

// for(let i=1; i<=10; i++){
//     let kg = i/10;
//     console.log(`${kg} kg konfet ${kg*cost}`);
// }

// // for6

// let cost = 32.4;

// for(let i=2; i<=10; i+=2){
//     let kg=1+i/10;
//     console.log(`${kg} kg konfet ${kg*cost}`)
// }

// // for7
// let a = 4;
// let b= 10;
// let sum = 0;
// for(let i=a; i<=b; i++){
//     sum+=i;
// }
// console.log(sum);

// // for8
// let a = 1;
// let b= 4;
// let multiply = 1;
// for(let i=a; i<=b; i++){
//     multiply*=i;
// }
// console.log(multiply);

// // for9
// let a = 1;
// let b= 5;
// let summa = 0;

// for(let i=a; i<=b; i++){
//     summa+=i**2
// }
// console.log(summa)


// // 1-misol

// let n= +prompt('Son kiriting: ');

// for(let i=0; i<n; i++){
//     let str = '';
//     for (let j=0; j<n; j++){
//         str+= " * "
        
//     }
//     console.log(str)
// }


// let n= +prompt('Son kiriting: ');

// for(let i=0; i<n; i++){ 
//     let str = '';
//     for (let j=0; j<n; j++) {
//         if(i == 0 || i == n-1 || j ==0 || j == n-1){
//             str += ' * ';
//         }
//         else
//         {
//             str+='   ';
//         }
//     }
//     console.log(str);
// }

// 2-misol kombinatsiya
for(let i =1; i<=3; i++){
    for(let j=1; j<=3; j++){
        for(let x=1; x<=3;x++){
            console.log(`${i} ${j} ${x}`)
        }
        console.log()
    }
}