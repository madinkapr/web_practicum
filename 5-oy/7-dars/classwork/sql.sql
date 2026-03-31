create table users (
	id serial not null primary key,
	email varchar(255) not null unique,
	created_at timestamptz default current_timestamp
);

create table todos (
	id serial not null primary key,
	name text not null,
	is_completed boolean default false,
	created_at timestamptz default current_timestamp,
	user_id int references users(id) on delete cascade -- ON DELETE CASCADE nima qiladi? ota (parent) o‘chsa → bola (child) ham avtomatik o‘chadi);users → parent table, books (yoki boshqa) → child table
);

ALTER TABLE todos ALTER COLUMN name SET NOT NULL;

-- Mock data

insert into users(email) values ('b@gmail.com'), ('d@gmail.com'), ('e@gmail.com');

insert into todos(name,user_id) values
	('A1', 1),
	('A2', 1),
	('A3', 1),
	('A4', 1),
	('A5', 1),

	('B1', 2),
	('B2', 2),
	('B3', 2)
;

insert into todos(name,user_id) values
	('B1', 3),
	('B2', 3),
	('B3', 3)
;

insert into todos(name,user_id) values
	('A1', 111)
;

select
	t.id todo_id,
	t.created_at ca,
	u.id user_id,
	u.email
from
	todos t
join users u on t.user_id = u.id
;

-- select
-- 	u.email
-- from users u

-- left join todos t on t.id = u.id
-- order by u.email
-- ;

-- todo bajarganlar
select
    u.email,
    (
        select count(id) from todos t where t.user_id=u.id
    ) as count_of_todos
from users u
where (
        select count(id) from todos t where t.user_id=u.id
    )>0
order by count_of_todos desc
;

-- todo bajarmaganlar
select
	u.email,
	(
		select count(id)
		from todos t
		where
			t.user_id = u.id and
			t.is_completed = false
	) as count_of_todos
from users u
where (
	select
		count(id)
	from todos t
	where t.user_id = u.id
) > 0
order by count_of_todos desc
;

-- select count(id) from todos where user_id = 1;

create table users (
	id serial not null primary key,
	username text
);

create table todos (
	id serial not null primary key,
	name text
	user_id int references users(id) on delete cascade
);


