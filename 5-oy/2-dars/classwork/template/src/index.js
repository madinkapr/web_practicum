import { fileURLToPath } from "node:url"
import * as path from "node:path"
import express from "express"
import ejs from "ejs"

const PORT = parseInt( process.env.PORT || 3_000 )
const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

//

const app = express()

app.use( express.static( path.join( __dirname, "..", "public" ) ) )

app.engine( "html", ejs.renderFile )
app.set( "view engine", "html" )

app.set( "views", path.join( __dirname, "views" ) )

app.get( "/", ( _, res ) => res.render( "index", { title: "Welcome" } ) )

//

app.listen( PORT, () => {

	console.info( `Server ready at: ${ PORT }` )
} )
