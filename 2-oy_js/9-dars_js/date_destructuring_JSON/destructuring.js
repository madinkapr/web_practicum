// 1-topshiriq.
function getInfo(){
    const oila = {
        ota: {ism: 'Ismoil', yosh: 67, kasb: 'pensioner'},
        ona: {ism: 'Mavluda', yosh: 59, kasb: 'o\'qituvchi', maosh: 5000000},
        bola1: {ism: 'Eldor', yosh:39, kasb:'dasturchi', maosh: 6000000},
        bola2: {ism: 'Elyor', yosh:36, kasb: 'iqtisodchi', maosh: 8000000}
    }
    
    for(let key in oila){
        const {ism, yosh, kasb} = oila[key];
        
        console.log(`${key}\nIsmi: ${ism}\nYoshi: ${yosh}\nKasbi: ${kasb}\n`)
    }
}

getInfo()

//2-topshiriq
const savat = [
    {nom: 'Olma', narx: 8000, miqdor: 2, kategoriya:'meva'},
    {nom: 'Non', narx: 3000, miqdor: 3, kategoriya:"g'alla"},
    {nom: 'Sut', narx: 12000, miqdor: 1, kategoriya:'sut'},
    {nom: 'Banan', narx: 15000, miqdor: 1, kategoriya:'meva'},
    {nom: 'Tuxum', narx: 20000, miqdor: 1, kategoriya:'oqsil'},
    {nom: 'Pishloq', narx: 45000, miqdor: 1, kategoriya:'sut'}
];

function savatTahlili(savat){
    let umumiySumma = 0;
    let arzon = savat[0];
    let qimmat = savat[0];
    let kategoriyalar = {};
    
    for(let product of savat){
        const {nom,narx, miqdor, kategoriya} = product;
        const jami = narx*miqdor;
        umumiySumma+=jami;
        
        if(narx<arzon.narx){
            arzon=product;
        }
        if(narx>qimmat.narx){
            qimmat=product;
        }
        if (!kategoriyalar[kategoriya]) {
              kategoriyalar[kategoriya] = {
              summa: 0,
              mahsulotlar: []};
        };
        
        kategoriyalar[kategoriya].summa+= jami;
        kategoriyalar[kategoriya].mahsulotlar.push(`${nom}:${narx.toLocaleString()} * ${miqdor} = ${jami.toLocaleString()} so'm`);
    }
    
    console.log('SAVAT TAHLILI:\n');
    console.log(`Umumiy summa: ${umumiySumma.toLocaleString()} so'm`);
    console.log(`Eng arzon: ${arzon.nom} – ${arzon.narx.toLocaleString()} so'm`);
    console.log(`Eng qimmat: ${qimmat.nom} – ${qimmat.narx.toLocaleString()} so'm\n`);
    console.log('KATEGORIYALAR:\n');
    for(let kategoriya in kategoriyalar){
        const{summa, mahsulotlar} = kategoriyalar[kategoriya];
        
        console.log(`${kategoriya.toUpperCase()}: ${summa.toLocaleString()} so'm`);
        mahsulotlar.forEach(m=>console.log(`   ${m}`))
    }
    
}

savatTahlili(savat)

//3-topshiriq
const sumka = ['kitob', 'ruchka', 'daftar', 'kompyuter', 'telefon', 'suv', 'ovqat'];
function generate(sumka){
    const kategoriya = {
        oquv: ['kitob', 'daftar', 'ruchka'],
        texnika: ['kompyuter', 'telefon'],
        ovqat: ['suv', 'ovqat']
    };
    
    const result = {
        oquv: [],
        texnika: [],
        ovqat: []
    };
    
    for(let n of sumka){
        const [narsa] = [n]
        if(kategoriya.oquv.includes(narsa)){
            result.oquv.push(narsa);
        }else if(kategoriya.texnika.includes(narsa)){
            result.texnika.push(narsa)
        }else{
            result.ovqat.push(narsa)
        }
    }
    
    for (let kategoriya in result) {
    console.log(`\n${kategoriya.toUpperCase()}:`);
    result[kategoriya].forEach(item =>
      console.log(`- ${item}` )
    );
  }
}


generate(sumka)