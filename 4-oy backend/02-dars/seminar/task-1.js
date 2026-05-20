// import {createServer} from 'http';
// const PORT = 3000;

// const server = createServer(async(req,res)=>{
//     if(req.method==='GET' && req.url ==='/post'){
//         const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')

//         const jsonData= await data.json()

//         const title = jsonData.title

//         res.writeHead(200,{'content-type':'application/json'})
//         return res.end(JSON.stringify({"title":title}))
//     }
// })

// server.listen(PORT, ()=>console.log('Server is running on port',PORT))

//2-usul
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        return response.json(); // JSON ga o‘tkazamiz
    })
    .then((post) => {
        console.log(post.title); // sarlavhani chiqaramiz
    })
    .catch((error) => {
        console.error("Xatolik:", error);
    });