import express from 'express';
import { config } from 'dotenv';
config()
import { getData, addData } from './file.js'


const app = express();
const PORT = process.env.PORT;

app.use(express.json())

const users = await getData();

app.get('/users', (_req, res) => {
    return res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params?.id);
    const user = users.find(el => el.id === id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json(user);
})

app.post('/users', async (req, res) => {
    const id = users.length ? users.at(-1)?.id + 1 : 1;
    const newUser = { id, ...req.body };
    users.push(newUser);
    await addData(users);
    return res.status(201).json(newUser);
})

app.put('/users/:id', async (req, res) => {
    const id = Number(req.params?.id);
    const index = users.findIndex(el => el.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: 'User not found'
        })
    }
    users[index] = { id, ...req.body };
    await addData(users);
    return res.status(200).json(users[index])
})

app.delete('/users/:id', async(req, res) => {
    const id = Number(req.params?.id);
    const index= users.findIndex(el=>el.id===id);
    if(index===-1){
        return res.status(404).json({message:'User not found'})
    }
    users.splice(index,1)
    await addData(users);
    return res.status(200).json({})
})


app.listen(PORT, () => {
    console.log('Server running on', PORT)
})