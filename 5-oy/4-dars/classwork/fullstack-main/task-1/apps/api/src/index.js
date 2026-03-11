import fastify from "fastify"
import cors from "@fastify/cors"

const PORT = parseInt( process.env.API_PORT || 3_000 )
const app = fastify( { logger: true } )

app.register( cors, {
	origin: "*",
	methods: [ "GET", "POST", "PATCH", "PUT", "DELETE" ],
	credentials: true,
} )

app.get( "/", () => {

	return {
		ok: true,
	}
} )

app.get( "/chars", () => {

	return [ "A", "B", "C", "D", "E", "F", "G", "E" ]
} )

app.listen( { port: PORT } )
