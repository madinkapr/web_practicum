import express from 'express';
import { config } from 'dotenv';
config();
import { getData, addData } from './utils/file-manage.js';

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json())

const cities = await getData() 

app.get('/cities', async (_req, res) => {
    return res.status(200).json(cities)
})

app.get('/cities/:id', async (req, res) => {
    const id = Number(req.params?.id);
    const city = cities.find(el => el.id === id);
    if (!city) {
        return res.status(404).json({
            message: "City not found"
        })
    }
    return res.status(200).json(city)
})

app.post('/cities', async (req, res) => {
    const id = cities.length ? cities.at(-1)?.id + 1 : 1;
    const newCity = { id, ...req.body };
    cities.push(newCity);
    await addData(cities);
    return res.status(201).json(newCity)
})

app.patch('/cities/:id', async (req, res) => {
    const id = Number(req.params?.id);
    const index = cities.findIndex(el => el.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "City not found" })
    }
    cities[index] = { id, ...req.body };
    await addData(cities);
    return res.status(200).json(cities[index])
})


app.delete('/cities/:id', async (req, res) => {
    const id = Number(req.params?.id);
    const index = cities.findIndex(el => el.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "City not found" })
    }
    cities.splice(index, 1);
    await addData(cities);
    return res.status(200).json({})
})

app.listen(PORT, () => console.log('Server running on', PORT))
