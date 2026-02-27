let savat = [
    {
        nomi: "Telefon",
        narx: 2000000,
        soni: 1
    },
    {
        nomi: "Naushnik",
        narx: 50000,
        soni: 2
    },
    {
        nomi: "Qopqoq",
        narx: 30000,
        soni: 3
    }];
    
console.log(savat.reduce((acc,item)=>acc+item.narx,0))
