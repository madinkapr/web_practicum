import { Pool } from "pg"

export const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
})

export async function query(sql, ...params){
    const client = await pool.connect();

    try {
        const result = await client.query(sql, params)
        return result.rows
    } finally{
        client.release()
    }
}