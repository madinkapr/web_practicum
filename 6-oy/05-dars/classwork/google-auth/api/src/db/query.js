export const SAVE_USER = `
    INSERT INTO users (id, name, email, picture)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (id) DO NOTHING
`

export const SAVE_SESSION = `
    INSERT INTO sessions (session_id, user_id) 
    VALUES ($1, $2)
`

export const GET_SESSION = `
    SELECT u.* FROM users u
    JOIN sessions s ON s.user_id = u.id
    WHERE s.session_id = $1
`

export const DELETE_SESSION = `
    DELETE FROM sessions WHERE session_id = $1
`