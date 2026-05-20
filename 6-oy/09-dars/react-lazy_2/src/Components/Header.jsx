import { memo } from "react"

function Header ( { count } ) {

	let sum = 0

	for ( let i = 0; i < count; i++ ) {

		sum += i * Math.random()
	}

	console.log( sum )

	console.log( "Header", count )

	return (
		<header>
			Header
		</header>
	)
} 

export default memo( Header )
