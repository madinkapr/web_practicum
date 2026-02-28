//winston logger  yaratish
import express from 'express'
import winston from 'winston'
import expressWinston from 'express-winston'


const app = express()

app.use(express.json())


app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.printf(info => {
            return `${info.level}: ${info.message} ${JSON.stringify(info.meta, null, 2)}`
        })
    )
}))

app.get("/:dynamic", (_req, res) => {
    res.send({ message: 'ok' })
})

app.listen(3_000, () => console.log(3_000))