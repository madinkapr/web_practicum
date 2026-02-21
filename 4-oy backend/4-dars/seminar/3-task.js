import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

const data = await fetch('https://jsonplaceholder.typicode.com/albums')
const album = await data.json()

app.get(`/albums/:id`, async (req, res) => {
    const id = Number(req.params?.id);
    const music = album.find(el=>el.id===id)
    if(!music){
        return res.status(404).json({
            message:'Album not found'
        })
    }

    return res.status(200).json(music)
})

app.listen(PORT, () => console.log('Server running on', PORT))