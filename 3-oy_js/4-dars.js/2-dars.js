const promise = new Promise((res, rej) => {
    setTimeout(() => {
        rej('Xatolik yuz berdi')
    }, 1000)
})

promise.catch(rej=>console.log(rej))