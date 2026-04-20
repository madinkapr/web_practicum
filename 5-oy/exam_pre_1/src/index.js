import { query } from "./query";
import fastify from "fastify";

const app = fastify();

app.get('/books', (req,res)=>{
    let{page, count}=req.query;
})


app.listen({port: (process.env.BACKEND_PORT) || 3000}, ()=>console.log('Database connected'))
