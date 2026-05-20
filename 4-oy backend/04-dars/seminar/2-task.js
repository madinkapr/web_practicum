import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataJson = await data.json();

    let html = "<h1>Users</h1><ul>";

    for(let i=0; i<dataJson.length;i++){
        html+=`<li>${dataJson[i].name}</li>`
    }

    html+="</ul>";

    return res.status(200).send(html)
})


app.listen(PORT, () => console.log('Server running on', PORT))