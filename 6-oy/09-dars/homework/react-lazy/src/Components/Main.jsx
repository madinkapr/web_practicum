import {memo} from "react";

export default memo(function Main( { children } ) {

	console.log( "Main" )

	return (
		<main className="main">
			{ children }
		</main>
	)
})
