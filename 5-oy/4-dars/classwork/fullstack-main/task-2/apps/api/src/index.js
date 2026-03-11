import fastify from "fastify"
import cors from "@fastify/cors"
import fastifyStatic from "@fastify/static"
import * as path from "path"
import * as url from "url"
import { products } from "./products.js"

const __filename = url.fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

const PORT = parseInt( process.env.API_PORT || 3_000 )
const app = fastify( { logger: true } )

app.register( cors, {
	origin: "*",
	methods: [ "GET", "POST", "PATCH", "PUT", "DELETE" ],
	credentials: true,
} )

app.register( fastifyStatic, {
	root: path.join( __dirname, "..", "public" ),
	prefix: "/public/",
} )

app.get( "/", () => {

	return {
		ok: true,
	}
} )

app.get( "/products", () => {

	return products
} )

app.get( "/chars", () => {

	return [ "A", "B", "C", "D", "E", "F", "G" ]
} )

app.listen( { port: PORT } )
