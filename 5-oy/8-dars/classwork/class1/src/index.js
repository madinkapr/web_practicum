import { Client } from 'pg'

const PG_USER = process.env.PG_USER
const PG_PASSWORD = process.env.PG_PASSWORD
const PG_HOST = process.env.PG_HOST
const PG_PORT = process.env.PG_PORT
const PG_DBNAME = process.env.PG_DBNAME 

const client = new Client({
  user: PG_USER,
  password: PG_PASSWORD,
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DBNAME,
})

await client.connect()

const result = await client.query(`select
    b.id,
    b.created_at,
    b.name,
    c.name category,
    u.fullname author
from books b
join users u on u.id=b.author_id
join categories c on c.id=b.category_id
;`)

console.log(result.rows)