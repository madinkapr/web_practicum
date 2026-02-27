function findError(str){
    let qavs = [];

    for(let i=0; i<str.length;i++){
        if(str[i]=='(' || str[i]=='{' || str[i]=='['){
            qavs.push(str[i]);
        }else{
            if(qavs.length ===0){
                return false
            }; 
            let last = qavs.pop();

            if(
                (str[i]===')' && last !== '(')||
                (str[i]===']' && last !== '[') || 
                (str[i]==='}' && last !== '{')
            ){
                return false;
            }
        }
    }
    return qavs.length === 0;
}

let s = "()[]{}"
console.log(findError(s))