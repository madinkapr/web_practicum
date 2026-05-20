import { createServer } from 'http';
import { getData, addData } from './file.js'



const app = createServer(async (req, res) => {
    //GET
    if (req.method === 'GET' && req.url === '/') {
        const products = await getData();
        res.writeHead(200, { "content-type": "application/json" });
        return res.end(JSON.stringify(products))
    }
    //POST
    if (req.method === 'POST' && req.url === '/') {
        let body = ""   //json fotmatda ozi shunga res.endda json formatga aylantirish shart emas!
        const products = await getData()

        req.on("data", (chunk) => {
            body += chunk;
        })

        req.on('end', async () => {
            const id = products.length ? products.at(-1)?.id + 1 : 1;
            const newProduct = { id, ...JSON.parse(body) }
            products.push(newProduct);
            await addData(products);

            res.writeHead(201, { "content-type": "application/json" });
            return res.end(JSON.stringify(newProduct));
        })
    }

    //PUT
    if (req.method === 'PUT' && req.url.startsWith('/')) {
        const id = Number(req.url.split('/')[2]);
        const products = await getData();
        const index = products.findIndex(item => item.id === id)

        if (index === -1) {
            res.writeHead(404, { "content-type": "application/json" })
            return res.end(JSON.stringify({
                message: 'Product not found'
            }))
        }

        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        })

        req.on('end', async () => {
            products[index] = { id, ...JSON.parse(body) }
            await addData(products)

            res.writeHead(200, { "content-type": "application/json" })
            return res.end(JSON.stringify(products[index]))
        })
    }

    //delete
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

app.listen(3000, () => console.log('Server running on port', 3000))