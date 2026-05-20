import express from 'express';
import { config } from 'dotenv';
config();
import { getData, addData } from './utils/file.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const companies = await getData();

app.get('/companies', (_req, res) => {
    return res.status(200).json(companies);
})

app.get('/companies/:id', (req, res) => {
    const id = Number(req.params?.id);
    const company = companies.find(el => el.id === id);
    if (!company) {
        res.status(404).json({ message: 'Company not found' });
    }
    return res.status(200).json(company);
})

app.post('/companies', async (req, res) => {
    const id = companies.length ? companies.at(-1)?.id + 1 : 1;
    const newCompany = { id, ...req.body };
    companies.push(newCompany);
    await addData(companies);
    return res.status(201).json(newCompany);
})

app.put('/companies/:id', async (req, res) => {
    const id = Number(req.params?.id);
    const index = companies.findIndex(el => el.id === id);
    if (index === -1) {
        res.status(404).json({ message: "Company not found" });
    }
    companies[index] = { id, ...req.body }
    await addData(companies);
    return res.status(200).json(companies[index]);
})

app.patch('/companies/:id', async (req, res) => {
    const id = Number(req.params?.id);
    const index = companies.findIndex(el => el.id === id);
    if (index === -1) {
        res.status(404).json({ message: "Company not found" })
    }
    companies[index] = { ...companies[index], ...req.body }
    await addData(companies);
    return res.status(200).json(companies[index])
})

app.delete('/companies/:id', async (req, res) => {
    const id = Number(req.params?.id);
    const index = companies.findIndex(el => el.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Company not found" })
    }
    companies.splice(index, 1);
    await addData(companies)
    return res.status(200).json({})
})
app.listen(PORT, () => console.log('Server running on', PORT));