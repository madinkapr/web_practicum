-- TASK

SELECT 
    count(id) AS count_todos,
    (
        SELECT count(id) 
        FROM todos 
        WHERE is_completed = true
    ) AS done,
    (
        SELECT count(id)
        FROM todos 
        WHERE is_completed = false
    ) AS not_done,
    ROUND(
        (
            (SELECT count(id) FROM todos WHERE is_completed = true) * 100.0
        ) / count(id),
        2
    ) AS done_percent
FROM todos;

-- DB diagrams.io task

create table authors (
    id serial not null primary key ,
    full_name text not null unique
)

create table categories (
    id serial not null primary key,
    name varchar(100) not null unique
)

create table books (
    id serial not null primary key,
    title text not null,
    author_id int references authors(id) on delete cascade,
    category_id int references categories(id) on delete cascade,
    published_year int,
    isbn varchar(20) unique
)




