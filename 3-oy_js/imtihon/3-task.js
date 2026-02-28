function gen(){
    let oldingi = 5
    console.log(oldingi)
    return function inner(){
        oldingi++
        return oldingi
        
    }
    
}

const keyingi = gen()
console.log(keyingi())
console.log(keyingi())



