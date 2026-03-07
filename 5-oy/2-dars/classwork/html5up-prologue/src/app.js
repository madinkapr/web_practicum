import express from 'express'
import ejs from 'ejs'
import { fileURLToPath } from 'node:url'
import * as path from 'node:path'

const PORT = Number(process.env.PORT) || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// assets va images ni alohida ulash
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')))
app.use('/images', express.static(path.join(__dirname, '..', 'images')))

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (_, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `)
})