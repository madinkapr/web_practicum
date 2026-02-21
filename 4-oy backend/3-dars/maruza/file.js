import {readFile,writeFile} from 'fs/promises'

export async function getData(){
    const data = await readFile('./products.json', 'utf-8');
    return JSON.parse(data);
}

export async function addData(data){
    await writeFile('./products.json', JSON.stringify(data,null,2));
}