const p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('1 sekund kuting')
    },1000)
})

const p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('2 sekund kuting')
    },2000)
})

const p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('3 sekund kuting')
    },3000)
})

Promise.all([p1,p2,p3]).then(res=>console.log(res))
.catch(err=>console.log(err))