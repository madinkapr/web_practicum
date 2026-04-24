import { route as join, schema as joinSchema } from "./join.js"
import { route as login, schema as loginSchema } from "./login.js"
import { route as users, schema as usersSchema } from "./users.js"

export default function( fastify ) {

	fastify.post( "/join", joinSchema, join )
	fastify.post( "/login", loginSchema, login )
	fastify.get( "/users", usersSchema, users )
}
