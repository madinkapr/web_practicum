import Fastify from "fastify"
import cors from "@fastify/cors"
import cookie from "@fastify/cookie"
import JWT from "jsonwebtoken"
import argon2 from "argon2"
import { db } from "./db.js"

const PORT = parseInt(process.env.PORT || "3000")
const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET
const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET
const COOKIE_SECRET = process.env.COOKIE_SECRET

const fastify = Fastify({ logger: true })

fastify.register(cors, {
	credentials: true, // server frontendga cookie ni yuborish uchun kerak
	origin: "http://localhost:5173",
})
fastify.register(cookie, {
	secret: COOKIE_SECRET,
})

fastify.get("/", () => ({ status: "OK" }))

fastify.post("/signup", async (req, res) => {

	if (!req.body || typeof req.body !== "object") {
		return res.status(400).send({ code: "APP_BODY_REQUIRED" })
	}

	const { username, password, confirmPassword } = req.body

	if (!username || typeof username !== "string") {
		return res.status(400).send({
			code: "APP_USERNAME_REQUIRED"
		})
	}

	// faqat harf, raqam, underscore — 3 dan 20 gacha belgi
	if (!/^[a-zA-Z0-9_]{3,20}$/.test(username)) {
		return res.status(400).send({
			code: "APP_USERNAME_INVALID"
		})
	}

	if (!password || typeof password !== "string") {
		return res.status(400).send({
			code: "APP_PASSWORD_REQUIRED"
		})
	}

	// kamida 8 ta belgi
	if (password.length < 8) {
		return res.status(400).send({
			code: "APP_PASSWORD_TOO_SHORT"
		})
	}

	// kamida 1ta raqam bolsin
	if (!/\d/.test(password)) {
		return res.status(400).send({
			code: "APP_PASSWORD_MUST_CONTAIN_ONE_NUMBER"
		})
	}

	if (password !== confirmPassword) {
		return res.status(400).send({
			code: "APP_PASSWORD_CONFIRMATION_DOES_NOT_MATCH",
		})
	}

	if (db.users.has(username)) {
		return res.status(409).send({
			code: "APP_USERNAME_ALREADY_EXISTS",
		})
	}

	const user = {
		username,
		password: await argon2.hash(password),
	}

	db.users.set(username, user)

	const payload = {
		username: user.username,
	}

	const accessToken = JWT.sign(payload, JWT_ACCESS_TOKEN_SECRET, {
		expiresIn: 60 * 30,
	})
	const refreshToken = JWT.sign(payload, JWT_REFRESH_TOKEN_SECRET, {
		expiresIn: 60 * 60 * 24 * 7,
	})

	db.refreshTokens.set(username, refreshToken)

	res.setCookie("refresh_token", refreshToken, {
		httpOnly: true,
		sameSite: "lax",
		path: "/refresh",
		secure: process.env.NODE_ENV === "production",
		signed: true
	})

	res.status(201).send({ accessToken })

})

fastify.post("/login", async (req, res) => {

	if (!req.body || typeof req.body !== "object") {
		return res.status(400).send({ code: "APP_BODY_REQUIRED" })
	}

	const { username, password } = req.body

	if (!username || typeof username !== "string") {
		return res.status(400).send({ code: "APP_USERNAME_REQUIRED" })
	}

	if (!password || typeof password !== "string") {
		return res.status(400).send({ code: "APP_PASSWORD_REQUIRED" })
	}

	if (!db.users.has(username)) {

		return res.status(401).send({
			code: "APP_USERNAME_NOT_EXISTS",
		})
	}

	const user = db.users.get(username)

	if (!user || !(await argon2.verify(user.password, password))) {

		return res.status(401).send({
			code: "APP_PASSWORD_INVALID",
		})
	}

	const payload = {
		username: user.username,
	}

	const accessToken = JWT.sign(payload, JWT_ACCESS_TOKEN_SECRET, {
		expiresIn: 60 * 30,
	})
	const refreshToken = JWT.sign(payload, JWT_REFRESH_TOKEN_SECRET, {
		expiresIn: 60 * 60 * 24 * 7,
	})

	db.refreshTokens.set(username, refreshToken)

	res.setCookie("refresh_token", refreshToken, {
		httpOnly: true,
		sameSite: "lax",
		path: "/refresh",
		secure: process.env.NODE_ENV === "production",
		signed: true,
	})

	return res.status(201).send({ accessToken })
})
fastify.post("/refresh", async (req, res) => {

	const unsigned = req.cookies.refresh_token ? req.unsignCookie(req.cookies.refresh_token) : null

	if (!unsigned?.valid || !unsigned.value) {
		return res.status(401).send({ code: "APP_REFRESH_TOKEN_INVALID" })
	}

	const refreshToken = unsigned.value
	let payload
	try {

		payload = await JWT.verify(refreshToken, JWT_REFRESH_TOKEN_SECRET)

		const refreshTokenInDb = db.refreshTokens.get(payload.username)

		if (!refreshTokenInDb || refreshTokenInDb !== refreshToken) {

			return res.status(401).send({
				code: "APP_REFRESH_TOKEN_INVALID",
			})
		}

		const accessToken = JWT.sign({ username: payload.username }, JWT_ACCESS_TOKEN_SECRET, {
			expiresIn: 60 * 30,
		})

		return res.status(200).send({
			accessToken,
		})
	}
	catch (error) {
		if (payload) {
			db.refreshTokens.delete(payload.username)
			res.clearCookie("refresh_token", {
				httpOnly: true,
				sameSite: "lax",
				path: "/refresh",
				secure: process.env.NODE_ENV === "production",
				signed: true
			})
		}
		fastify.log.error(error)
		return res.status(401).send({
			code: "APP_REFRESH_TOKEN_INVALID"
		})
	}
})

const authenticate = (req, res, done) => {

	const auth = req.headers.authorization

	if (!auth?.startsWith("Bearer ")) {

		return res.status(401).send({ error: "Unauthorized" })
	}

	try {

		req.user = JWT.verify(auth.slice(7), JWT_ACCESS_TOKEN_SECRET)
		done()
	}
	catch {

		res.status(401).send({ error: "Unauthorized" })
	}
}

const adminOnly = (req, res, done) => {
	const user = db.users.get(req.user.username)
	if (!user || user.role !== "admin") {
		return res.status(403).send({ code: "APP_FORBIDDEN" })
	}
	done()
}


fastify.post("/colors", { onRequest: authenticate }, () => {
	return [...db.colors]
})

fastify.post("/admin/colors", { onRequest: [authenticate, adminOnly] }, () => {
	return [...db.colors]
})

fastify.post("/logout", { onRequest: authenticate }, (req, res) => {
	const refreshToken = req.unsignCookie(req.cookies.refresh_token).value
	db.refreshTokens.delete(req.user.username)
	res.clearCookie("refresh_token", {
		httpOnly: true,
		sameSite: "lax",
		path: "/refresh",
		secure: process.env.NODE_ENV === "production",
		signed: true
	})
	return res.status(200).send({ message: "Logged out successfully" })
})

fastify.listen({ port: PORT, host: "0.0.0.0" })
