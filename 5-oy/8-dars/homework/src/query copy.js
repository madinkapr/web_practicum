import { Client } from "pg";

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

await client.connect()

export async function query(sql, paramlar=[]){
    try {
        console.log()
        const result = await client.query(sql, paramlar)
        return result.rows
    } catch (error) {
        console.error(error)
        throw error;
    }
    // finally {
    //     client.end();
    // }
}