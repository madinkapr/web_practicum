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

    // const offset = (page - 1) * count

    // let sql = `
    // select 
    //     b.id,
    //     b.name,
    //     b.cover_url,
    //     c.name category,
    //     concat(a.first_name, ' ', a.last_name) as author
    // from books b 
    // join categories c on c.id=b.category_id
    // join auth a on a.id = b.author_id
    // `
    // const params = []

    // if (category !== null) {
    //     sql += ` WHERE b.category_id = $1`  
    //     params.push(category)

    //     sql += ` ORDER BY b.id LIMIT $2 OFFSET $3`
    //     params.push(count, offset)
    // } else {
    //     sql += ` ORDER BY b.id LIMIT $1 OFFSET $2`
    //     params.push(count, offset)
    // }

    let sql = `
    select
	b.id,
	b.name,
	b.price,
	b.category_id,
	b.cover_url,
	a.first_name || ' ' || a.last_name author,
	c.name category_name
from books b
join auth a on a.id = b.author_id
join categories c on c.id = b.category_id
where
	b.category_id > (
		case
			when $1 > 0 then $1 - 1
			else 0
		end
	) AND
	b.category_id < (
		case
			when $1 > 0 then $1 + 1
			else ( select max( id ) + 1 from categories )
		end
	)
order by b.id
offset ( $2 - 1 ) * $3 limit $3;
    `
    
    const books = await query(sql,  category , page, count)

    return {
        page,
        count,
        category,
        data: books
    }
})



app.listen({ port: 3000 })