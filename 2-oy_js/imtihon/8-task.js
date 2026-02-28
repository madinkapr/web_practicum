let orders = [
    { price: 100, paid: true },
    { price: 200, paid: false },
    { price: 150, paid: true },
];
let arr = []
for (let order of orders) {
    const { price, paid } = order;
    if (paid == true) {
        console.log(order)
        arr.push(order.price);
    }
}
console.log(arr.reduce((acc, item) => acc + item))







