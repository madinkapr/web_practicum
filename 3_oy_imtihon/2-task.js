function sum(son){
    return function sum(son1){
        return function sum(son2){
            console.log(son+son1+son2)
        }
    }
}

sum(1)(2)(3)