import { createServer } from 'http';
import { config } from 'dotenv';
config();
import { getData, addData } from './file.js'

const PORT = Number(process.env.PORT);
const contentType = { "content-type": "application/json" };

const server = createServer(async (req, res) => {
    //READ
    if (req.method === 'GET' && req.url === '/products') {
        const products = await getData();
        res.writeHead(200, contentType);
        return res.end(JSON.stringify(products))
    }

    //read by id
    if (req.method === 'GET' && req.url.startsWith('/products/')) {
        const products = await getData();
        const id = Number(req.url.split('/')[2]);
        const product = products.find(item => item.id === id);
        if (!product) {
            res.writeHead(404, contentType);
            return res.end(JSON.stringify({
                message: 'Product not found'
            }))
        }
        res.writeHead(200, contentType);
        return res.end(JSON.stringify(product));
    }

    //CREATE
    if (req.method === 'POST' && req.url === '/products') {
        let body = '';
        const products = await getData();

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async () => {
            const id = products.length ? products.at(-1)?.id + 1 : 1;
            const newProduct = { id, ...JSON.parse(body) };
            products.push(newProduct);
            await addData(products);

            res.writeHead(201, contentType);
            return res.end(JSON.stringify(newProduct))
        })
    }

    //UPDATE
    if (req.method === 'PUT' && req.url.startsWith('/products/')) {
        const id = Number(req.url.split('/')[2]);
        const products = await getData();        
        const index = products.findIndex(item => item.id === id);

        if (index === -1) {
            res.writeHead(404, contentType);
            return res.end(JSON.stringify({
                message: 'Product not found'
            }))
        }

        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', async () => {
            products[index] = {id, ...JSON.parse(body)}
            await addData(products);

            res.writeHead(200, contentType);
            return res.end(JSON.stringify(products[index]))
        })

    }

    //DELETE
    if(req.method==="DELETE" && req.url.startsWith('/products/')){
        const id = Number(req.url.split('/')[2])
        const products = await getData();
        const index = products.findIndex(item=>item.id===id);

        if(index===-1){
            res.writeHead(404, contentType)
            return res.end(JSON.stringify({
                message: 'Product not found'
            }))
        }

        products.splice(index,1);
        await addData(products);

        res.writeHead(200,contentType);
        res.end(JSON.stringify({}))
    }

})

server.listen(PORT, () => console.log('Server running on', PORT));