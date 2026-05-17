import { memo } from "react"

export default memo( function () {

	console.log( "Footer" )
	console.log( "---------" )

	return (
		<footer className="footer">
			© 2025 React Lazy App
		</footer>
	)
} )
