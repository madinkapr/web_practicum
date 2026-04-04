import Fastify from 'fastify'
import { query } from './query.js'

const app = Fastify();

app.get('/books', async (req, res) => {
    const page = Number(req.query.page) || 1
    const count = Number(req.query.count) || 10
    const category = req.query.category ? Number(req.query.category) : null

    if (page < 1 || count < 1) {
        return res.code(400).send({
            message: 'page va count 1dan katta bolishi kerak'
        })
    }

    const offset = (page - 1) * count

    let sql = `
    select 
        b.id,
        b.name,
        b.cover_url,
        c.name category,
        concat(a.first_name, ' ', a.last_name) as author
    from books b 
    join categories c on c.id=b.category_id
    join auth a on a.id = b.author_id
    `
    const params = []

    if (category !== null) {
        sql += ` WHERE b.category_id = $1`
        params.push(category)

        sql += ` ORDER BY b.id LIMIT $2 OFFSET $3`
        params.push(count, offset)
    } else {
        sql += ` ORDER BY b.id LIMIT $1 OFFSET $2`
        params.push(count, offset)
    }

    const books = await query(sql, params)

    return {
        page,
        count,
        category,
        data: books
    }
})



app.listen({ port: 3000 })