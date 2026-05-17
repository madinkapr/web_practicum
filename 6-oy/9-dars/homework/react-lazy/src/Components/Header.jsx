import { memo, useMemo } from "react"

function Header ( { count } ) {

	let sum = useMemo( () => {

		console.log( "called" )

		let result = 0

		for ( let i = 0; i < count; i++ ) {

			result += i * Math.random()
		}

		return result

	}, [ count ] )

	console.log( "Header" )

	return (
		<header className="header">
			Header — useMemo natija: <span>{ Math.round( sum ) }</span>
		</header>
	)
} 

export default memo( Header )
