function grade(ball){
    if(ball>=90) return 'A'
    else if(ball>=70 || ball<=89){
        return 'B'
    }else if(ball>=50 || ball<=69){
        return 'C'
    }else{
        return 'Fail'
    }
}

console.log(grade(85))