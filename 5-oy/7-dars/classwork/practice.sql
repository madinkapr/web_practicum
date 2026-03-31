-- SQL’da siz queryni shunday tartibda yozasiz:
-- SELECT ...
-- FROM ...
-- JOIN ...
-- ON ...
-- WHERE ...
-- GROUP BY ...
-- HAVING ...
-- ORDER BY ...
-- LIMIT ...

-- Database ichida esa boshqacha tartibda bajariladi:
-- 1. FROM
-- 2. JOIN
-- 3. ON
-- 4. WHERE
-- 5. GROUP BY
-- 6. HAVING
-- 7. SELECT
-- 8. ORDER BY
-- 9. LIMIT

-- LEFT JOIN = chap table dagi HAMMA ma’lumot + mos kelgan o‘ng table. LEFT JOIN → chap taraf HAR DOIM qoladi
-- -- 🟦 users chap
-- id	name
-- 1	Ali
-- 2	Vali
-- 3	Sami   

-- 🟩 books ong
-- name	author_id
-- Book1	1
-- Book2	1
-- Book3	2 Sami (id=3) → kitobi yo‘q

SELECT * FROM users LEFT JOIN books ON users.id = books.author_id;
-- -- Natija
-- Ali  | Book1
-- Ali  | Book2
-- Vali | Book3
-- Sami | NULL

-- RIGHT JOIN = o‘ng table dagi HAMMA data + mos kelgan chap table
-- -- 🟦 users (LEFT)
-- id	name
-- 1	Ali
-- 2	Vali

-- -- 🟩 books (RIGHT)
-- name	author_id
-- Book1	1
-- Book2	1
-- Book3	2
-- Book4	999 ❗Book4 → user yo‘q

SELECT * FROM users RIGHT JOIN books ON users.id = books.author_id;

-- -- Natija
-- Ali  | Book1
-- Ali  | Book2
-- Vali | Book3
-- NULL | Book4 ❗



------------------------------------------------Task-----------------------------------------------------------

-- 1. CREATE DATABASE
-- "maktab" nomli yangi database yarating.
-- "dokon" nomli database yarating.

CREATE DATABASE maktab;
CREATE DATABASE dokon;

-- 2. Database ro'yxatini ko'rish 
-- Tizimdagi barcha databaselar ro'yxatini ko'ring.
-- Sizning yaratgan "maktab" databasesi ro'yxatda borligini tekshiring.
\l

-- 3. Database'ga ulanish   
-- "maktab" databasega ulaning.
-- "dokon" databasega ulaning, keyin yana "maktab" databasega qaytib ulaning.
\c maktab
\c dokon
\c maktab

-- 4. CREATE TABLE
-- "oquvchilar" nomli jadval yarating (id, ism, familiya, yosh, sinf ustunlari bo'lsin).
-- "mahsulotlar" nomli jadval yarating (id, nomi, narxi, soni, kategoriya ustunlari bo'lsin)

CREATE TABLE oquvchilar (
    id SERIAL NOT NULL PRIMARY KEY,
    ism VARCHAR(20) NOT NULL,
    familiya VARCHAR(30) NOT NULL,
    yosh INT,
    sinf INT NOT NULL 
)

CREATE TABLE mahsulotlar (
    id SERIAL NOT NULL PRIMARY KEY,
    nomi TEXT NOT NULL UNIQUE,
    narxi NUMERIC(10,2) NOT NULL,
    soni INT NOT NULL,
    kategoriya VARCHAR(50) 
)

-- 5. INSERT INTO
--   "oquvchilar" jadvaliga 5 ta o'quvchi ma'lumotini kiriting.
--  "mahsulotlar" jadvaliga 6 ta mahsulot qo'shing (turli kategoriyalarda bo'lsin).

INSERT INTO oquvchilar (ism, familiya, yosh, sinf) VALUES ('Ali', 'Valiyev', 24, 9), ('Ishmat', 'Gishmatov', 12, 5), ('Vali', 'Ishmatov', 30, 12), ('Kamola', 'Saitqosimova', 21, 10), ('Hilola', 'Normatova', 23, 8);

INSERT INTO mahsulotlar (nomi, narxi, soni, kategoriya) VALUES ('olma', 10000, 1, 'oziq-ovqat'), ('nok', 20000, 2, 'meva'), ('anor', 40000, 10, 'meva'), ('ipad', 10000000, 1, 'texnika'), ('ko''zoynak', 60000, 1, 'buyum'), ('telefon', 5000000, 1, 'texnika');

-- 6. SELECT FROM
-- "oquvchilar" jadvalidagi barcha ma'lumotlarni ko'ring.
-- Faqat o'quvchilarning ismi va sinfini ko'rsating.
-- Mahsulotlarning nomini va narxini ko'rsating.

SELECT * FROM oquvchilar;
SELECT ism, sinf FROM oquvchilar;
SELECT nomi, narxi FROM mahsulotlar;

-- 7. WHERE
-- 9-sinfda o'qiyotgan o'quvchilarni toping.
-- Yoshi 14 dan katta o'quvchilarni chiqaring.
-- Narxi 10000 so'mdan arzon mahsulotlarni ko'rsating.
-- "Meva" kategoriyasidagi mahsulotlarni toping.

SELECT ism FROM oquvchilar WHERE sinf = 9;
SELECT ism FROM oquvchilar WHERE yosh > 14;
SELECT nomi FROM mahsulotlar WHERE narxi < 10000;
SELECT nomi FROM mahsulotlar WHERE kategoriya = 'meva';

-- 8. ORDER BY
-- O'quvchilarni yoshi bo'yicha o'sish tartibida tartiblang.
-- O'quvchilarni familiyasi bo'yicha alifbo tartibida chiqaring.
-- Mahsulotlarni narxi bo'yicha kamayish tartibida ko'rsating.
-- Mahsulotlarni avval kategoriya, keyin narx bo'yicha tartiblang.

SELECT * FROM oquvchilar ORDER BY yosh;
SELECT * FROM oquvchilar ORDER BY familiya;
SELECT * FROM mahsulotlar ORDER BY narxi DESC;
SELECT kategoriya, narxi FROM mahsulotlar ORDER BY kategoriya, narxi;

-- 9. ALTER
-- "oquvchilar" jadvaliga "telefon" ustuni qo'shing.
-- "mahsulotlar" jadvalidagi "narxi" ustunining turini o'zgartiring.
-- "oquvchilar" jadvalidan "telefon" ustunini o'chiring.

ALTER TABLE oquvchilar ADD COLUMN telefon TEXT;
ALTER TABLE mahsulotlar ALTER COLUMN narxi SET NOT NULL;
ALTER TABLE oquvchilar DROP COLUMN telefon;

-- 10. DROP DATABASE
-- "dokon" databasedan chiqib, uni o'chiring.
-- Yangi "test_db" database yaratib, uni darhol o'chiring.

DROP DATABASE dokon;
CREATE DATABASE test_db;
DROP DATABASE test_db;

-- 11. Aralash Topshiriqlar
-- 15 yoshdan katta bo'lgan o'quvchilarni yoshi bo'yicha kamayish tartibida chiqaring.
--  "Meva" kategoriyasidagi mahsulotlarni narxi bo'yicha o'sish tartibida ko'rsating.
-- Soni 50 dan ko'p bo'lgan mahsulotlarni toping va ularni nomi bo'yicha tartiblang.
-- 8 va 9-sinflarda o'qiyotgan o'quvchilarni ismi bo'yicha alifbo tartibida chiqaring.

SELECT * FROM oquvchilar WHERE yosh>15 ORDER BY yosh DESC;
SELECT * FROM mahsulotlar WHERE LOWER(kategoriya)='meva' ORDER BY narxi;
SELECT * FROM mahsulotlar WHERE soni>50 ORDER BY nomi;
SELECT * FROM oquvchilar WHERE sinf= 8 OR sinf=9 ORDER BY ism;