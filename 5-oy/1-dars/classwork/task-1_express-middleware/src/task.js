//logger middleware yaratish qo'lda
import express from 'express'

const app = express()

app.use(express.json())

app.use((req,_res,next)=>{
    console.info(`${req.method} => ${req.url}`)
    next()
})

app.get("/:dynamic", (req,res)=>{    
    res.send({ message: 'ok' })
})


app.listen(3000,()=> console.log(3000))