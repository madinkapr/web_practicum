CREATE DATABASE google_auth;

CREATE TABLE users (
    id      TEXT PRIMARY KEY,
    name    TEXT,
    email   TEXT,
    picture TEXT
);

CREATE TABLE sessions (
    session_id  TEXT PRIMARY KEY,
    user_id     TEXT REFERENCES users(id)
);