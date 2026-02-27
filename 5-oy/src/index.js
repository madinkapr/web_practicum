import express from 'express'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    req.chubakabra = 'animal'
    next()
})

app.get('/login', (req, res) => {
    console.log(req.body)
    console.log(req.chubakabra)

    res.send({ message: 'ok' })
})

app.listen(3000, () => console.info(3000))