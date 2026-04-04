-- CREATE DATABSE kitob_dokon;

-- CREATE TABLE auth (
--   id SERIAL PRIMARY KEY,
--   first_name TEXT,
--   last_name TEXT
-- );

-- CREATE TABLE "categories" (
--   "id" SERIAL PRIMARY KEY NOT NULL,
--   "name" text
-- );

-- CREATE TABLE books (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   author_id INTEGER REFERENCES auth(id),
--   category_id INTEGER REFERENCES categories(id),
--   price NUMERIC,
--   cover_url TEXT
-- );

-- INSERT INTO auth (first_name, last_name) VALUES
-- ('Robert', 'Martin'),
-- ('Andrew', 'Hunt'),
-- ('Erich', 'Gamma'),
-- ('Martin', 'Fowler'),
-- ('Thomas', 'Cormen'),
-- ('Kyle', 'Simpson'),
-- ('Marijn', 'Haverbeke'),
-- ('Douglas', 'Crockford'),
-- ('Kathy', 'Sierra'),
-- ('Craig', 'Walls');

-- INSERT INTO categories (name) VALUES
-- ('Self-development'),
-- ('Finance'),
-- ('Technology'),
-- ('Biography');

-- INSERT INTO books (name, author_id, category_id, price, cover_url) VALUES
-- ('Clean Code', 1, 1, 50000, '/images/1.png'),
-- ('The Pragmatic Programmer', 2, 1, 55000, '/images/2.png'),
-- ('Design Patterns', 3, 1, 60000, '/images/3.png'),
-- ('Refactoring', 4, 1, 52000, '/images/4.png'),
-- ('Introduction to Algorithms', 5, 1, 70000, '/images/5.png'),
-- ('You Don''t Know JS', 6, 1, 48000, '/images/ydkjs.jpg'),
-- ('Eloquent JavaScript', 7, 1, 47000, '/images/eloquent_js.jpg'),
-- ('JavaScript: The Good Parts', 8, 1, 45000, '/images/js_good.jpg'),
-- ('Head First Java', 9, 1, 46000, '/images/head_first_java.jpg'),
-- ('Spring in Action', 10, 1, 49000, '/images/spring.jpg'),

-- ('Harry Potter and the Sorcerer''s Stone', 1, 2, 40000, '/images/hp1.jpg'),
-- ('Harry Potter and the Chamber of Secrets', 2, 2, 42000, '/images/hp2.jpg'),
-- ('Harry Potter and the Prisoner of Azkaban', 3, 2, 43000, '/images/hp3.jpg'),
-- ('The Hobbit', 4, 2, 38000, '/images/hobbit.jpg'),
-- ('The Lord of the Rings', 5, 2, 80000, '/images/lotr.jpg'),
-- ('Game of Thrones', 6, 2, 75000, '/images/got.jpg'),
-- ('The Alchemist', 7, 2, 30000, '/images/alchemist.jpg'),
-- ('1984', 8, 2, 32000, '/images/1984.jpg'),
-- ('Animal Farm', 9, 2, 28000, '/images/animal_farm.jpg'),
-- ('The Great Gatsby', 10, 2, 31000, '/images/gatsby.jpg'),

-- ('Physics for Beginners', 1, 3, 45000, '/images/physics.jpg'),
-- ('Quantum Mechanics Basics', 2, 3, 65000, '/images/quantum.jpg'),
-- ('Relativity Explained', 3, 3, 60000, '/images/relativity.jpg'),
-- ('Astrophysics 101', 4, 3, 55000, '/images/astro.jpg'),
-- ('Biology Essentials', 5, 3, 40000, '/images/biology.jpg'),
-- ('Genetics Simplified', 6, 3, 42000, '/images/genetics.jpg'),
-- ('Chemistry Made Easy', 7, 3, 39000, '/images/chemistry.jpg'),
-- ('Organic Chemistry', 8, 3, 50000, '/images/organic.jpg'),
-- ('Human Anatomy', 9, 3, 48000, '/images/anatomy.jpg'),
-- ('Neuroscience Basics', 10, 3, 52000, '/images/neuro.jpg'),

-- ('World War II History', 1, 4, 45000, '/images/ww2.jpg'),
-- ('Ancient Civilizations', 2, 4, 47000, '/images/ancient.jpg'),
-- ('History of Europe', 3, 4, 48000, '/images/europe.jpg'),
-- ('History of Asia', 4, 4, 46000, '/images/asia.jpg'),
-- ('History of America', 5, 4, 49000, '/images/america.jpg'),
-- ('The Silk Road', 6, 4, 42000, '/images/silk.jpg'),
-- ('Ottoman Empire', 7, 4, 43000, '/images/ottoman.jpg'),
-- ('Russian Empire', 8, 4, 44000, '/images/russia.jpg'),
-- ('Cold War', 9, 4, 45000, '/images/coldwar.jpg'),
-- ('Modern History', 10, 4, 46000, '/images/modern.jpg'),

-- ('Rich Dad Poor Dad', 1, 5, 35000, '/images/richdad.jpg'),
-- ('Think and Grow Rich', 2, 5, 36000, '/images/thinkrich.jpg'),
-- ('The Lean Startup', 3, 5, 50000, '/images/lean.jpg'),
-- ('Zero to One', 4, 5, 52000, '/images/zero.jpg'),
-- ('Start with Why', 5, 5, 48000, '/images/why.jpg'),
-- ('Atomic Habits', 6, 5, 45000, '/images/atomic.jpg'),
-- ('Deep Work', 7, 5, 47000, '/images/deepwork.jpg'),
-- ('The 4-Hour Workweek', 8, 5, 46000, '/images/4hour.jpg'),
-- ('Principles', 9, 5, 60000, '/images/principles.jpg'),
-- ('Good to Great', 10, 5, 55000, '/images/goodgreat.jpg'),

-- ('Clean Architecture', 1, 1, 50000, '/images/ca.jpg'),
-- ('Domain Driven Design', 2, 1, 60000, '/images/ddd.jpg'),
-- ('Microservices', 3, 1, 55000, '/images/micro.jpg'),
-- ('Docker Deep Dive', 4, 1, 52000, '/images/docker.jpg'),
-- ('Kubernetes Up & Running', 5, 1, 65000, '/images/k8s.jpg'),
-- ('Python Crash Course', 6, 1, 48000, '/images/python.jpg'),
-- ('Fluent Python', 7, 1, 53000, '/images/fluent.jpg'),
-- ('Effective Java', 8, 1, 57000, '/images/java.jpg'),
-- ('C++ Primer', 9, 1, 58000, '/images/cpp.jpg'),
-- ('Go in Action', 10, 1, 49000, '/images/go.jpg'),

-- ('Dune', 1, 2, 42000, '/images/dune.jpg'),
-- ('The Catcher in the Rye', 2, 2, 30000, '/images/catcher.jpg'),
-- ('To Kill a Mockingbird', 3, 2, 35000, '/images/mockingbird.jpg'),
-- ('Brave New World', 4, 2, 33000, '/images/brave.jpg'),
-- ('Fahrenheit 451', 5, 2, 34000, '/images/f451.jpg'),
-- ('Dracula', 6, 2, 31000, '/images/dracula.jpg'),
-- ('Frankenstein', 7, 2, 32000, '/images/frankenstein.jpg'),
-- ('The Shining', 8, 2, 45000, '/images/shining.jpg'),
-- ('It', 9, 2, 47000, '/images/it.jpg'),
-- ('Pet Sematary', 10, 2, 44000, '/images/pet.jpg'),

-- ('Astronomy Today', 1, 3, 55000, '/images/astro2.jpg'),
-- ('Space Exploration', 2, 3, 60000, '/images/space.jpg'),
-- ('Black Holes', 3, 3, 62000, '/images/blackholes.jpg'),
-- ('Evolution Theory', 4, 3, 45000, '/images/evolution.jpg'),
-- ('DNA Secrets', 5, 3, 48000, '/images/dna.jpg'),
-- ('Medical Science', 6, 3, 50000, '/images/medical.jpg'),
-- ('Pharmacology', 7, 3, 52000, '/images/pharma.jpg'),
-- ('Botany Basics', 8, 3, 41000, '/images/botany.jpg'),
-- ('Zoology Intro', 9, 3, 42000, '/images/zoo.jpg'),
-- ('Ecology Systems', 10, 3, 43000, '/images/ecology.jpg'),

-- ('Medieval Europe', 1, 4, 45000, '/images/medieval.jpg'),
-- ('Renaissance Period', 2, 4, 47000, '/images/renaissance.jpg'),
-- ('Industrial Revolution', 3, 4, 48000, '/images/industrial.jpg'),
-- ('American Revolution', 4, 4, 46000, '/images/revolution.jpg'),
-- ('French Revolution', 5, 4, 49000, '/images/french.jpg'),
-- ('Napoleon Era', 6, 4, 42000, '/images/napoleon.jpg'),
-- ('World War I', 7, 4, 43000, '/images/ww1.jpg'),
-- ('Cold War Politics', 8, 4, 44000, '/images/cold.jpg'),
-- ('Modern Politics', 9, 4, 45000, '/images/politics.jpg'),
-- ('Global History', 10, 4, 46000, '/images/global.jpg');

-- test
-- - http://localhost:3000/books
-- http://localhost:3000/books?page=2
-- http://localhost:3000/books?count=5
-- http://localhost:3000/books?page=2&count=5
-- http://localhost:3000/books?page=1&category=2
-- http://localhost:3000/books?page=2&category=2&count=5