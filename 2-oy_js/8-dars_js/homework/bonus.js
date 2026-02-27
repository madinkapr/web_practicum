let mahsulotlar = [
{id: 1, nomi: "Laptop", narx: 5000000, kategoriya: "elektronika", soni: 5},
{id: 2, nomi: "Mouse", narx: 50000, kategoriya: "elektronika", soni: 20},
{id: 3, nomi: "Kitob", narx: 30000, kategoriya: "kitoblar", soni: 15},
{id: 4, nomi: "Stol", narx: 800000, kategoriya: "mebel", soni: 3},
{id: 5, nomi: "Klaviatura", narx: 150000, kategoriya: "elektronika", soni:
10}
];

// 1. Elektronika kategoriyasidagi mahsulotlarni toping 
// console.log(mahsulotlar.filter(item=>item.kategoriya=='elektronika'))

// 2. Narxi 100000 dan yuqori mahsulotlarni saralang 
// console.log(mahsulotlar.filter(item=>item.narx>100000).sort((a,b)=>a.narx-b.narx))

// 3. Barcha mahsulotlar narxining o'rtacha qiymatini hisoblang (reduce)
// console.log( mahsulotlar.reduce((acc, item) => acc + item.narx, 0) / mahsulotlar.length)

// 4. Har bir mahsulotga 10% chegirma qo'shing (map)
// console.log(mahsulotlar.map(item=>item.narx+(0.1*item.narx)))

// 5.Omborda kamida 10 dona bor mahsulotlar bormi? (some)
console.log(mahsulotlar.some(item=>item.soni==10))

// 6. Barcha mahsulotlar 1000000 so'mdan arzonmi? (every)
console.log(mahsulotlar.every(item=>item.narx<100))

// 7. Yangi mahsulot qo'shing (push/unshift)
mahsulotlar.push({id:6, nomi:'Monitor', narx: 80000, kategoriya: "elektronika", soni: 20})
mahsulotlar.unshift({id:7, nomi: 'Termiz', narx: 120000, kategoriya: 'mahsulot', soni: 30})
console.log(mahsulotlar)

// 8. ID=3 bo'lgan mahsulotni toping (find)
console.log(mahsulotlar.find(item=>item.id==3))

// 9. Mahsulotlarning faqat nomlarini chiqaring (map)
console.log(mahsulotlar.map(item=>item.nomi))

// 10. Umumiy mahsulotlar qiymatini hisoblang (reduce)
console.log(mahsulotlar.reduce((acc,item)=>acc+item.narx,0))