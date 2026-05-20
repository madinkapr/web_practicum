import { createServer } from 'http';
import { getData, addData } from './file.js';

const PORT = 3000;
const contentType = { "content-type": "application/json" }

const server = createServer(async (req, res) => {
    //READ
    if (req.method === 'GET' && req.url === '/users') {
        const users = await getData()
        res.writeHead(200, contentType)
        return res.end(JSON.stringify(users))
    }
    //READ by id
    if (req.method === "GET" && req.url.startsWith('./users/')) {
        const id = Number(req.url.split('/')[2]);
        const users = await getData();
        const user = users.find(item => item.id === id);

        if (!user) {
            res.writeHead(404, contentType)
            res.end(JSON.stringify({
                message: 'User not found'
            }))
        }

        res.writeHead(200, contentType);
        res.end(JSON.stringify(user))
    }
    //WRITE
    if (req.method === 'POST' && req.url === '/users/') {
        let body = '';

        req.on('data', (chunk)=>{
            body+=chunk;
        })

        req.on('end', )
    }
})

server.listen(PORT, () => console.log('Server running on', PORT))