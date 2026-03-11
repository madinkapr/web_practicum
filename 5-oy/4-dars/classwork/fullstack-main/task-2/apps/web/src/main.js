import "./main.css"

const API_URL = "http://localhost:3000"

const productUL = document.getElementById( "products" )

const products = await ( await fetch( "http://localhost:3000/products" ) ).json()

for ( const product of products ) {

	const li = document.createElement( "LI" )
	const h1 = document.createElement( "H1" )
	const p = document.createElement("P")
	const img = document.createElement( "IMG" )

	li.appendChild( h1 )
	
	li.appendChild( img )
	li.appendChild(p)
	productUL.appendChild( li )

	h1.textContent = product.name
	
	img.src = API_URL + product.coverIMG
	img.alt = product.name
	p.textContent = product.price
}
