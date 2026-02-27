let sonlar = [45, 12, 88, 3, 67];
console.log(sonlar.sort(compare));


function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}