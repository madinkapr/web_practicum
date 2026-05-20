import express from 'express';
const PORT = 3000;

const app = express();

app.use(express.json())

app.get('/posts', async(_req,res)=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const dataJson = await data.json()
    const title = dataJson.title

    return res.status(200).json({"title":title})
})


app.listen(PORT,()=>console.log("Port running on",PORT))
