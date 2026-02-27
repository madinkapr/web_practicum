function promiseWithTimeout(promise, timeout) {
    const timeoutPromise =  new Promise((res, rej) => {
        setTimeout(()=>{
            rej(new Error(`${timeout} vaqt yetmadi`))
        },timeout)
    })
    return Promise.race([promise,timeoutPromise])
}

const p = new Promise((res,rej)=>{
    setTimeout(()=>res('BAjarildi'),1000)
})

promiseWithTimeout(p, 2000)
    .then((res)=>console.log(res))
    .catch((err) => console.log(err.message));