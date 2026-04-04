import { Client } from 'pg'
import Fastify from 'fastify'

const app = Fastify()

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

// SQL ineksiya - foydalanuvchi kiritgan input orqali SQL queryni buzish yoki o‘zgartirish. Yani: user sizning queryingizni “hack” qiladi. 
// misol uchun localhost:3000/books/; qilsam xato beradi: {"statusCode":500,"code":"42601","error":"Internal Server Error","message":"syntax error at or near \";\""} va yonidan ozim drop table books degan query yozsam sql ineksiya hisoblanadi yani querysini rasvosini chiqarolaman  table ochirolaman

// select * from books where id> ; select * from books; -> 1chi query xato uni tashab  2chini natijasini chiqaradi

// app.get('/books/:id', async (req, res) => {

//   const sql = `
//     select
//       b.id,
//       b.created_at,
//       b.name,
//       c.name category,
//       u.fullname author
//     from books b
//     join users u on u.id=b.author_id
//     join categories c on c.id=b.category_id
//     where b.id=${req.params.id}
// ;`
//   console.log(sql)

//   const result = await client.query(sql)

//   return result.rows
// })


//buni oldini olish uchun 
// app.get('/users/:id', async (req, res) => {
//   const sql = `
//     select *
//     from users
//     where id=$1 
//     `
//   //$1 - 1ta qiymatga joy qoldirish, [1] id ga 1 qoyadi where id=1; degandek gap

//   const result = await client.query(sql, [req.params.id])
//   return result.rows
// })

// paginatsiya qilish bolib bolib chiqarish
const todos_per_page = 3; // har bir pagedan 3tadan chiqish kere

app.get('/todos/:page', async (req, res) => {
  const offset = (req.params.page - 1) * todos_per_page

  const sql = `
    select *
    from todos
    offset $1 limit $2
    `

  const result = await client.query(sql, [offset, todos_per_page])
  
  return result.rows

})

app.listen({ port: 3000 })