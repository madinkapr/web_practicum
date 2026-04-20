import fastify from "fastify";
import { query } from "./query.js";
import { BOOKS } from "./books.js";

const app = fastify();

app.get('/books', async (req, res) => {

    let { page = 1, count = 10 } = req.query;

    page = parseInt(page) || 1;
    count = parseInt(count) || 10;

    const offset = (page - 1) * count;

    const books = await query( BOOKS, offset, count);

    return books
})

app.listen({ port: (process.env.BACKEND_PORT-0) ||3_000}, ()=>console.log('Databasega ulandi'));