import { readFile, writeFile } from 'fs/promises'

async function Avarage(filename) {
    try {
        const data = await readFile(filename, 'utf-8')
        const users = JSON.parse(data)
        let sum = 0
        for (let user of users) {
            sum += user.age;
        }
        const avg_age = sum / users.length
        await writeFile('result.json', JSON.stringify({ avg_age }, null, 2))
        console.log('Done')
    } catch (err) {
        console.log('dang', err)
    }
}

Avarage('users.json')

//2.

