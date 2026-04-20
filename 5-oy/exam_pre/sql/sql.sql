select 
    b.id,
    b.name,
    b.price,
    b.category_id,
    b.cover_url, 
    a.first_name || " " || a.last_name author
    c.name category_name
from books b
join auth a on a.id=b.author_id
join categories c on c.id=b.category_id
order by b.id
offset($1-1)*$2 limit $2;


export const BOOKS = `
select
    b.id,
    b.name,
    b.price,
    b.category_id,
    b.cover_url,
    a.first_name || ' ' || a.last_name author,
    c.name category_name
from books b
join auth a on a.id=b.author_id
join categories c on c.id=b.category_id
order by b.id
offset $1 limit $2;
`

-- test
-- - http://localhost:3000/books
-- http://localhost:3000/books?page=2
-- http://localhost:3000/books?count=5
-- http://localhost:3000/books?page=2&count=5
-- http://localhost:3000/books?page=1&category=2
-- http://localhost:3000/books?page=2&category=2&count=5