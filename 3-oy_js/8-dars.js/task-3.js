import {readFile, writeFile} from 'fs/promises'

async function findExpensive(filename){
    try{
        const data = await readFile(filename, 'utf-8');
        const products = JSON.parse(data)
        let max = products[0];

        for(let p of products){
            if(p.price>max.price){
                max=p
            }
        }
        await writeFile('expensive.json', JSON.stringify(max, null,  2));
    }catch(err){
        console.log(err)
    }
}

findExpensive('products.json')