import JWT from "jsonwebtoken"
import { users } from "../../db.js"

const JWT_ACCESS_SECRET = process.env.VITE_JWT_ACCESS_SECRET

export const schema = {
	schema: {
		response: {
			200: {
				type: "array",
				items: { type: "string" },
			},
			401: {
				type: "object",
				properties: {
					code: { type: "string" },
					message: { type: "string" },
				},
				required: [ "code", "message" ],
			}
		}
	}
}

export async function route( req, res ) {

	if ( !req.headers.authorization ) {

		return res.status( 401 ).send( {
			code: "APP_UNAUTHORIZED",
			message: "Authorization header is missing"
		} )
	}

	const token = req.headers.authorization.substr( 6 ).trim()

	try {

		const payload = await JWT.verify( token, JWT_ACCESS_SECRET )

		console.log( payload )
	}
	catch( error ) {

		return res.status( 401 ).send( {
			code: "APP_UNAUTHORIZED",
			message: error.message,
		} )
	}

	return [ ...users.keys() ]
}
