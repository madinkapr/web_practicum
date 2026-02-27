let user = {
    name: "Ali",
    balance: 1200,
};

function pay(amount){
    if(amount<=user.balance){
        console.log(`balansda ${user.balance -=amount} bor`);
    }else{
        console.log("Yetarli mablag' yo'q")
    }
}

pay(200)