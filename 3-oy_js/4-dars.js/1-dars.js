const promise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Salom,dunyo')
    },2000)
})

promise.then(res=>console.log(res))