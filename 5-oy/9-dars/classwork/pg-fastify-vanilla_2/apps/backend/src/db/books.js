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
	) AND
	b.name ILIKE '%' || $4 || '%' OR 
	a.first_name ILIKE '%' || $4 || '%' OR
	a.last_name ILIKE '%' || $4 || '%'

		order by b.id
offset ( $2 - 1 ) * $3 limit $3
;
`
