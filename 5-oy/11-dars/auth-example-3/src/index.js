import Fastify from "fastify"
import argon2 from "argon2"
import { Pool } from 'pg'

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT
})

const app = Fastify()

// Database table yaratish
const initializeDatabase = async () => {
	try {
		await pool.query(`
			CREATE TABLE IF NOT EXISTS users (
				id SERIAL PRIMARY KEY,
				email VARCHAR(255) UNIQUE NOT NULL,
				password VARCHAR(255) NOT NULL,
				name VARCHAR(255) NOT NULL,
				created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
			)
		`)
		console.log("Database muvaffaqiyatli sozlandi")
	} catch (error) {
		console.error("Database sozlashda xatolik:", error)
	}
}

app.post("/signup", async (req, res) => {

	const { email, password, name } = req.body

	try {
		const hashedPassword = await argon2.hash(password)

		await pool.query(
			"INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *",
			[email.toLowerCase(), hashedPassword, name]
		)

		res.status(201)

		return { ok: true }
	} catch (error) {
		if (error.code === "23505") {
			res.status(400)
			return { message: `${email} allaqachon mavjud.` }
		}

		res.status(500)
		return { message: "Serverda xatolik yuz berdi" }
	}
})

app.post("/signin", async (req, res) => {

	let { email, password } = req.body

	email = email.toLowerCase()

	try {
		const result = await pool.query(
			"SELECT * FROM users WHERE email = $1",
			[email]
		)

		if (result.rows.length === 0) {
			res.status(401)
			return { message: `${email} mavjud emas.` }
		}

		const user = result.rows[0]

		if (!(await argon2.verify(user.password, password))) {
			res.status(401)
			return { message: `Notog'ri parol.` }
		}

		res.status(200)

		return {
			name: user.name,
			email: user.email,
		}
	} catch (error) {
		res.status(500)
		return { message: "Serverda xatolik yuz berdi" }
	}
})

await initializeDatabase()

app.listen({ port: 3_000 })
