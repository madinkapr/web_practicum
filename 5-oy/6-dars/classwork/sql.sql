create database my_app44;

create table if not exists users (
	id serial not null primary key,
	username varchar(48) not null unique,
	profile_pic text null default '/no_photo.jpg',
	birthday date
);

select 1;
select 2 + 4 as r;
select 2 + 4 r;

select id from users;
select id, username from users;

ALTER TABLE users DROP COLUMN profile_pic;
ALTER TABLE users ADD COLUMN profile_pic text null default '/no_photo.jpg';

DROP database my_app44;
DROP table users;

insert into users (username) values ('sora'), ('aisha'), ('usmon');

insert into users (username, birthday) values ('samandar', '09-14-2008');

update users set username = 'sardor' where username = 'sora';
update users set birthday = null;

select * from users where id > 5 and birthday is null;
select * from users where id > 5 and birthday is null order by id desc limit 2;




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
