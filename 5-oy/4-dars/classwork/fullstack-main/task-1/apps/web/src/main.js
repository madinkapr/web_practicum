import "./main.css"

const charsUL = document.getElementById( "chars" )

const characters = await ( await fetch( "http://localhost:3000/chars" ) ).json()

for ( const char of characters ) {

	const li = document.createElement( "LI" )

	li.textContent = char

	charsUL.appendChild( li )
}
