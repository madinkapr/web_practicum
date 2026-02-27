// Topshiriq-1 Set yaratish

const nums = [1, 2, 3, 3, 2, 1];
console.log(new Set(nums))

// Topshiriq-2 Element qo‘shish

const list = new Set();
list.add('apple')
    .add('banana')
    .add('orange');

console.log(list)

// Topshiriq-3 Element bor-yo‘qligini tekshirish

console.log(`Banan bormi? ${list.has('banana')}`);

// Topshiriq-4 Element o‘chirish

console.log(`Setdan orange o'chirildi:${list.delete('orange')}`);

// Topshiriq-5 Set uzunligini olish

console.log('Uzunligi:', list.size);

// Topshiriq-6 Takrorlangan elementlarni topish

const arr = [1,2,3,4,2,5,3,6];
const seen = new Set();
const dup = new Set();

for(let num of arr){
  if(seen.has(num)){
    dup.add(num)
  }else{
    seen.add(num)
  }
}

console.log(dup)

// Topshiriq-7 Ikki massivning umumiy elementlari

const a = [1,2,3,4];
const b = [3,4,5,6];

const general = a.concat(b);
const set = new Set();
const same = new Set();

for(let num of general){
  if(set.has(num)){
    same.add(num)
  }else{
    set.add(num)
  }
}

console.log([...same])

// Topshiriq-8 Ikki massiv birikmasi (union)

const a = [1,2,3,4];
const b = [3,4,5,6];

const general = a.concat(b);
const set = new Set(general);
console.log([...set])


// Topshiriq-9 Farq (difference)

const a = [1,2,3,4];
const b = [3,4,5,6];

const aSet = new Set(a);
const bSet = new Set(b);
const not = []

for(let i of aSet.values()){
  if(!bSet.has(i)){
    not.push(i)
  }
}

console.log(not)

// Topshiriq-10 Setni massivga aylantirish

const nums = [1, 2, 3, 3, 2, 1];
const set = new Set(nums);

// 1-usul
const arr = [];

for(let i of set.values()){
  arr.push(i)
}
console.log(arr)

//2-usul
console.log([...set])

// Topshiriq-11 String ichidan barcha unikal harflarni top

const str = "hello world";
const str1 = str.split(" ").join('')
console.log([...new Set(str1)])

// Topshiriq-12 Berilgan matnda nechta unikal so‘z borligini hisoblang

const str ='I like JS because JS is simple and JS is powerful';
const words = str.split(' ');
console.log(new Set(words).size);

// Topshiriq-13 Unikal ID generator
const ids = new Set();
let count = 0;

function SpecialId(){
  count++
  const id = `id_${count}`
  ids.add(id);
  return id
}

console.log(SpecialId())
console.log(SpecialId())
console.log(SpecialId())

// Davomi 2chi fileda ...