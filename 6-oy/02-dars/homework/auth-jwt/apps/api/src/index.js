import Fastify from "fastify"
import cors from "@fastify/cors"
import Argon2 from "argon2"
import JWT from "jsonwebtoken"

const fastify = Fastify()

fastify.register(cors)

const users = new Map()

users.set("madina", {
	is_admin: true,
	email: "madina@gmail.com",
	hash_password: await Argon2.hash("madina"),
})

const JWT_SECRET = "chubakabra"

fastify.get("/", () => ({ message: "ok" }))

fastify.get("/users", async (req, res) => {

	if (!req.headers.authorization) {

		return res.status(401).send({
			code: "APP_UNAUTHORIZED",
		})
	}

	const token = req.headers.authorization.substr(6).trim()

	try {

		const payload = await JWT.verify(token, JWT_SECRET)

		if (!payload.is_admin) {
			return res.status(403).send({
				code: "APP_FORBIDDEN",
				message: "You are not admin"
			})
		}
		
		console.log(payload)
		return [...users.keys()]
	}
	catch (error) {

		res.status(401).send({
			code: "APP_UNAUTHORIZED",
			message: error.message,
		})
	}

})

fastify.post("/join", async (req, res) => {

	let { username, email, password } = req.body

	let hash_password = await Argon2.hash(password)

	if (users.has(username)) {

		return res.status(400).send({
			code: "APP_AUTH_USERNAME_EXISTS",
		})
	}

	users.set(username, {
		email,
		hash_password,
		is_admin:false
	})

	// const payload = {
	// 	username,
	// 	is_admin: false,
	// }

	// const token = await JWT.sign(payload, JWT_SECRET)

	// return {
	// 	username,
	// 	token
	// }

	return { 'message': 'ok' }
})


fastify.post("/login", async (req, res) => {
	let { username, password } = req.body

	// 1. Verify user exists
	if (!users.has(username)) {
		return res.status(404).send({
			code: "Username not found",
		})
	}

	// 2. Verify password
	let isPasswordCorrect = await Argon2.verify(users.get(username).hash_password, password)

	if (!isPasswordCorrect) {
		return res.status(401).send({
			code: "Incorrect password",
		})
	}

	// 3. Generate JWT
	const payload = {
		username,
		is_admin: users.get(username).is_admin || false,
	}

	// 4. Return JWT: Token yaratamiz
	const token = await JWT.sign(payload, JWT_SECRET)

	// 5. Return token
	return {
		username,
		is_admin:payload.is_admin,
		token

	}
})

fastify.listen({ port: 3_000 }, ()=> {
	console.log("Server is running on http://localhost:3000")
})
