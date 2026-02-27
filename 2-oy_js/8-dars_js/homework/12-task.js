let talabalar = [
    { ism: "Ali", yosh: 17 },
    { ism: "Vali", yosh: 19 },
    { ism: "Salim", yosh: 16 }
];

console.log(talabalar.find(item => item.yosh > 18));
console.log(talabalar.findIndex((item) => item.yosh > 18));