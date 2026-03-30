-- \! clear - Ekranni tozalash
-- \l - list of databases
-- \dt - list of tables
-- \c - connect to database
-- \d table name - table clumn type
-- psql --version - versiyani korish
-- psql -U postgres -d postgres - postgresga ulanish keyin parol soridi

-- HOMEWORK

-- users, books

/*
	users
		id
		first_name
		last_name
		email
		password

	books
		id
		name
		author_id

	2 ta users
	5 ta kitob (2/3)

	menga email manzili abc bolgan odamlarning kitoblarini chiqar;
*/

CREATE DATABASE my_app;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  author_id INT NOT NULL,
  FOREIGN KEY (author_id) REFERENCES users(id)
); //qisqasi author_id INT NOT NULL REFERENCES users(id)

INSERT INTO users (first_name, last_name, email, password)
VALUES 
('Ali', 'Valiyev', 'ali.valiyev@gmail.com', '123'),
('Vali', 'Karimov', 'vali.karimov@gmail.com', '456');

INSERT INTO books (name, author_id)
VALUES 
('Book 1', 1),
('Book 2', 1),
('Book 3', 2),
('Book 4', 2),
('Book 5', 2);
;

-- QUERY
SELECT * FROM books;
SELECT * FROM users;

SELECT * FROM books JOIN users ON books.author_id = users.id WHERE users.email='ali.valiyev@gmail.com';