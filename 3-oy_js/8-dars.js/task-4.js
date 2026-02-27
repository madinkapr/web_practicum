import { readFile, writeFile } from 'fs/promises'

async function group(filename) {
    try {
        const data = await readFile(filename, 'utf-8');
        const users = JSON.parse(data);
        
        users.forEach(item=>{
            if(item.date)
        })

    } catch (err) {
        console.log('Dang', err)
    }

}

group('messages.json')