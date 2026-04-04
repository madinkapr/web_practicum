import { Client } from 'pg'

const PG_USER = process.env.PG_USER
const PG_PASSWORD = process.env.PG_PASSWORD
const PG_HOST = process.env.PG_HOST
const PG_PORT = process.env.PG_PORT
const PG_DBNAME = process.env.PG_DBNAME

const client = new Client({
    user: PG_USER,
    password: PG_PASSWORD,
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DBNAME,
})

export async function query(sql, ...params) {
    await client.connect()

    try {
        const result = await client.query(sql, params)
        return result.rows
    } catch (error) {
        console.log(error)
    }
    finally {
        client.end()
    }

}