const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(5)
    },1000)
});

promise.then(res=>res)
        .then(res=>res*2)
        .then(res=>console.log(res))