import Fastify from 'fastify'
import {query} from './query.js'

const app = Fastify()

app.get('/todos', async () => {
  
  return query(`select * from todos`)
})

app.listen({ port: 3000 })