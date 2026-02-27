let mahsulotlar = ["olma", "anor", "uzum", "olma", "banan"];
console.log(`1-o'rinda turgan 'olma' index: ${mahsulotlar.indexOf('olma')}`);

console.log(`Oxirida turgan 'olma' index: ${mahsulotlar.lastIndexOf('olma')}`)

if(mahsulotlar.includes('gilos')==false){
    console.log('Mahsulot topilmadi')
}
