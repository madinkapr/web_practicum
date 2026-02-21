import { createServer } from 'http';
import { config } from 'dotenv';
config();
import { getData, addData } from './file.js'

const PORT = Number(process.env.PORT);
const contentType = { "content-type": 'application/json' };

const server = createServer(async (req, res) => {
    //READ
    if (req.method === 'GET' && req.url === '/fruits') {
        const fruits = await getData();
        res.writeHead(200, contentType);
        return res.end(JSON.stringify(fruits));
    }
    //read by id
    if (req.method === 'GET' && req.url.startsWith('/fruits/')) {
        const id = Number(req.url.split('/')[2]);
        const fruits = await getData();
        const fruit = fruits.find(el => el.id === id);
        if (!fruit) {
            res.writeHead(404, contentType);
            return res.end(JSON.stringify({
                message: 'Fruit not found'
            }));
        }
        res.writeHead(200, contentType);
        return res.end(JSON.stringify(fruit));
    }

    //CREATE
    if (req.method === "POST" && req.url === '/fruits') {
        let body = '';
        const fruits = await getData();

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async () => {
            const id = fruits.length ? fruits.at(-1)?.id + 1 : 1;
            const newFruit = { id, ...JSON.parse(body) };
            fruits.push(newFruit);
            await addData(fruits);
            res.writeHead(201, contentType);
            return res.end(JSON.stringify(newFruit))
        })
    }

    //UPDATE
    if (req.method === 'PUT' && req.url.startsWith('/fruits/')) {
        const id = Number(req.url.split('/')[2]);
        const fruits = await getData();
        const index = fruits.findIndex(el => el.id === id);
        if (index === -1) {
            res.writeHead(404, contentType);
            return res.end(JSON.stringify({
                message: 'Fruit not found'
            }));
        }
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async() => {
            fruits[index] = { id, ...JSON.parse(body) };
            await addData(fruits);
            res.writeHead(200, contentType);
            return res.end(JSON.stringify(fruits[index]))
        })
    }


    //DELETE
    if(req.method==='DELETE' && req.url.startsWith('/fruits/')){
        const id = Number(req.url.split('/')[2]);
        const fruits = await getData();
        const index = fruits.findIndex(el => el.id === id);
        if (index === -1) {
            res.writeHead(404, contentType);
            return res.end(JSON.stringify({
                message: 'Fruit not found'
            }));
        }
        fruits.splice(index,1);
        await addData(fruits);
        res.writeHead(200,contentType);
        return res.end(JSON.stringify({}));

    }

})


server.listen(PORT, () => console.log('Port running on', PORT));