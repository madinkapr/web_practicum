import express from 'express';
import { config } from 'dotenv';
config();
import { getData, addData } from './utils/file.js'


const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());

const products = await getData();

app.get('/products', (_req, res) => {
    return res.status(200).json(products);
})

app.get('/products/:id', (req, res) => {
    const id = Number(req.params?.id);
    const product = products.find(el => el.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' })
    }
    return res.status(200).json(product)
})

app.post('/products', async (req, res) => {
    const id = products.length ? products.at(-1)?.id + 1 : 1;
    const newProduct = { id, ...req.body };
    products.push(newProduct);
    await addData(products);
    return res.status(201).json(newProduct)
})

app.put('/products/:id', async (req, res) => {
    const id = Number(req.params?.id);
    const index = products.findIndex(el => el.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' })
    }
    products[index] = { id, ...req.body };
    await addData(products)
    return res.status(200).json(products[index])
})

app.delete('/products/:id', async(req,res)=>{
    const id = Number(req.params?.id);
    const index = products.findIndex(el => el.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Product not found' })
    }
    products.splice(index,1);
    await addData(products);
    return res.status(200).json({})
})

app.listen(PORT, () => console.log('Server running port', PORT))