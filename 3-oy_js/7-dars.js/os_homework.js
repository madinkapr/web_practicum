//1.Kompyuterda qancha RAM bandligini % hisoblab chiqish

import os from 'os'

// const total = os.totalmem();
// const free = os.freemem();

// const used = total-free


// console.log(((used/total)*100).toFixed(),'%')

//2. 
const objs = os.networkInterfaces()
// console.log(objs)
let address = []
for(let obj in objs ){
    for(let name of objs[obj]){
        if(name.internal === false && name.family== 'IPv4'){
            address.push(name.address)
        }
    }
}

// console.log(address)

//3.
// const result = os.uptime();
// function format(seconds){
//     const h = Math.floor(seconds/3600);
//     const m = Math.floor((seconds%3600)/60);
//     const s = Math.floor(seconds%60);


//     return `${h}:${m}:${s}`
// }
// console.log(format(result))

//4. 
const cpus = os.cpus()
// console.log(cpus)
const arr = []

for(let c of cpus){
    // console.log(c.model)
    arr.push(c.model)
}
console.log(arr)