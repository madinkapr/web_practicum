// Topshiriq-14 Map yaratish

let students = new Map();

students.set('Ali', 20)
    .set('Vali', 22)
    .set('Olim', 19);
    
console.log(students)

// Topshiriq-15 Mapdan qiymat olish

console.log(`Valining yoshi ${students.get('Vali')} da`)

// Topshiriq-16 Mapdan element o‘chirish

console.log(`Mapdan Olim o'chirildi: ${students.delete('Olim')}`)

// Topshiriq-17 Map uzunligi

console.log(`Mapni uzunligi:${students.size}`)

// Topshiriq-18 Ob’ektni Map ga aylantirish

const user = { name: "John", age: 25, job: "dev" };
const map = new Map(Object.entries(user));
console.log(map)

// Topshiriq-19 Map bo‘yicha aylanish
    
for(let [name,age] of students.entries()){
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`)
}

// Topshiriq-20 So‘zlar chastotasi Map

const str = "apple banana apple orange banana apple"
const words = str.split(" ");
const map = new Map();

for(let word of words){
    if(map.has(word)){
        map.set(word, map.get(word)+1 )
    }else{
        map.set(word, 1)
    }
}

for(let [key,value] of map.entries()){
    console.log(key,'->', value)
}
