-- CREATE TABLE "users" (
--   "id" SERIAL PRIMARY KEY NOT NULL,
--   "fullname" text NOT NULL
-- );

-- CREATE TABLE "categories" (
--   "id" SERIAL PRIMARY KEY NOT NULL,
--   "name" text
-- );

-- CREATE TABLE "books" (
--   "id" SERIAL PRIMARY KEY NOT NULL,
--   "name" text,
--   "created_at" timestamptz DEFAULT (current_timestamp),
--   "author_id" int,
--   "category_id" int
-- );

-- ALTER TABLE "books" ADD FOREIGN KEY ("author_id") REFERENCES "users" ("id") ON DELETE CASCADE DEFERRABLE INITIALLY IMMEDIATE;

-- ALTER TABLE "books" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE CASCADE DEFERRABLE INITIALLY IMMEDIATE;

-- INSERT INTO users(fullname) values ('Abdulla Qodiriy'), ('O''tkir Hoshimov');
-- INSERT INTO categories(name) values ('Roman'), ('Qissa'), ('Ertak');
-- INSERT INTO books(name, author_id, category_id) values ('O''tgan kunlar', 1, 1), ('Ikki eshik orasi', 2, 1), ('Mexrobdan chayon', 1, 2);

-- select
--     b.id,
--     b.created_at,
--     b.name,
--     c.name category,
--     u.fullname author
-- from books b
-- join users u on u.id=b.author_id
-- join categories c on c.id=b.category_id
-- ;



-- MALUMOTLARNI BOLIB BOLIB OLISH 100TA MALUMOT ICHIDAN

create table todos (
  id serial not null primary key,
  name text
);

insert into todos(name) values ('Todo #1'), ('Todo #2'), ('Todo #3'), ('Todo #4'), ('Todo #5'), ('Todo #6'), ('Todo #7');

//offset - 2tasini otqazib yubor digani
SELECT *
FROM todos
OFFSET 2 LIMIT 3
;