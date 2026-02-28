import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const filePath = join(process.cwd(), './src/data/products.json');

export async function getData() {
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data)
}

export async function addData(data) {
    await writeFile(filePath, JSON.stringify(data, null, 2))
}