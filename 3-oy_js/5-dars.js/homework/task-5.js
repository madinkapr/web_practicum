function palindrom(x){
    let rev = String(x).split('').reverse().join('')
    if(rev==x){
        return `${x} son polindrom`
    }else{
        return `${x} son polindrom emas`
    }
}

console.log(palindrom(121))