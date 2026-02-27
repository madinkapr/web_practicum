//1.
import fs from 'fs'
// fs.writeFileSync('students.txt', 'Ali, Madina, Umid, G\'ishmat,Ishmat');
// const result = fs.readFileSync('students.txt', 'utf-8');
// console.log(result)

//2.
const ism = 'Ali'
const yosh = 24;

// fs.writeFileSync('user_info.txt', `${ism} user yoshi ${yosh}`);

//3.
function write(sana, matn) {
    try {
        fs.appendFileSync('diary.txt', `${sana}\n${matn}\n`)
    } catch {
        fs.writeFileSync('diary.txt', '')
    }
}


// write('17.01.2026', 'Hello world')
// write('18.07.1098', 'Hello MAdina')
// write('18.07.1098', 'Hello Ali')

//4.

const files = ['index.js', 'app.js', 'diary.txt'];

function deleteFile(file) {
    if (files.includes(file)) {
        fs.unlinkSync(file)
    } else {
        return 'Bunaqa file yoq'
    }
}

// deleteFile('diary.txt')

//5.
// fs.writeFileSync('draft.txt', '')
// fs.renameSync('draft.txt', 'final.txt')

//6.
// fs.mkdirSync("./projects");
// fs.mkdirSync("./projects/frontend");
// fs.mkdirSync("./projects/backend");

//7.
// fs.mkdirSync('./temp');
// if (fs.readdirSync("./temp").length === 0) {
//   fs.rmdirSync("./temp"); 
// }

//8.
// fs.mkdirSync('./temp');
// fs.writeFileSync('./temp/index.txt', '')
// fs.writeFileSync('./temp/index1.txt', '')
// const file = fs.readdirSync('./temp')
// console.log(file)

//9.
// fs.writeFileSync('test.txt','hello world')
// const data = fs.statSync('./test.txt')
// console.log(`Size: ${data.size}, ${data.birthtime}`)

//10.
// const isExist = fs.existsSync('./config.json');
// console.log(isExist)

//11.
function addFolder() {
    if (!fs.existsSync('./backup')) {
        fs.mkdirSync('./backup')
    }
    const files = fs.readdirSync("./");
    const copied = []

    files.forEach((f)=>{
        if(f.endsWith('.json')){
            fs.copyFileSync(`./${f}`, `./backup/${f}`);
            copied.push(f)
        }
    
    })
    return copied

}

console.log(addFolder())

