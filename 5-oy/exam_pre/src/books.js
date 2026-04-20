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