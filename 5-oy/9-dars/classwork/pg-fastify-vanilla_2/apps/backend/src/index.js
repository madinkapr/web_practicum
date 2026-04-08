import Fastify from "fastify"
import cors from "@fastify/cors"
import { query } from "./utils/pg.js"
import * as Q from "./db/index.js"

const app = Fastify()

await app.register( cors )

app.get( "/books", async( req, res ) => {

	let { page = 1, count = 10, category = 0, name = "" } = req.query

	page = parseInt( page ) || 1
	count = parseInt( count ) || 10
	category = parseInt( category ) || 0
	name = name || ""

	const books = await query( Q.BOOKS, category, page, count, name )

	return books
} )

app.get( "/categories", async () => {

	const categories = await query( Q.CATEGORIES )

	return categories
} )


app.listen( {
	port: ( process.env.BACKEND_PORT - 0 ) || 3_100,
} )
