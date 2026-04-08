import Fastify from "fastify"
import { query } from "./utils/pg.js"
import * as Q from "./db/index.js"

const app = Fastify()

app.get( "/books", ( req, res ) => {

	let { page = 1, count = 10, category = 0 } = req.query

	page = parseInt( page ) || 1
	count = parseInt( count ) || 10
	category = parseInt( category ) || 0

	const books = query( Q.BOOKS, category, page, count )

	return books
} )

app.listen( {
	port: ( process.env.BACKEND_PORT - 0 ) || 3_100,
} )
