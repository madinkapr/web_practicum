import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { json } from 'stream/consumers'

const countryPath = join('./country.json');

async function getData() {
    const countries = await readFile(countryPath, 'utf-8');
    return JSON.parse(countries);
}


//GET
const server = createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/countries') {
        res.writeHead(200, { 'Content-type': 'application/json' });
        const countries = await getData();
        return res.end(JSON.stringify(countries));
    }

    //GET by id
    if (req.method === "GET" && req.url.startsWith('/countries/')) {
        const id = Number(req.url.split('/')[2]);
        const countries = await getData();
        const country = countries.find(el => el.id === id);
        if (!country) {
            res.writeHead(404, { "content-type": "application/json" })
            return res.end(JSON.stringify({
                message: `Country not found by ID ${id}`
            }));
        }
        res.writeHead(200, { "content-type": "application/json" })
        return res.end(JSON.stringify(country))
    }



    else {
        res.writeHead(404, { 'content-type': "application/json" });
        res.end(JSON.stringify({
            message: 'PAge not found'
        }));
    }
});

server.listen(3000, () => console.log('server is running on port', 3000))

