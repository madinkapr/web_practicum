function loadUserData(userId) {
    return new Promise((res,rej)=>{
        if(userId%2===0){
            res('Success')
        }else{
            rej('Error')
        }
    })
    
}
loadUserData(2).then((res)=>console.log(res))
.catch(err=>console.log(err))