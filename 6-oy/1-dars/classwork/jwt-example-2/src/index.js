import JWT from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "chubakabra"

// const payload = {
// 	user_id: 1,
// 	is_admin: true,
// }

const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNzc2MzM2NzE2LCJleHAiOjE3NzYzMzY3NzZ9.vq1gcnxxe3YG48qzSPtB0R4hBQF49oqOSNnB6iGM-Os"

// console.log( JWT.sign( payload, JWT_SECRET, { expiresIn: 60 * 1 } ) )

try {

	const payload = JWT.verify( JWT_TOKEN, JWT_SECRET )

	console.log( payload )
}
catch( error ) {

	console.error( error.message )
}
