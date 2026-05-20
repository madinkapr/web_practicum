import { useContext } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"

export default function Search() {

	const [ theme ] = useContext( ThemeContext )
	const className = `search ${ theme }`

	return (
		<div className={ className }>
			<input />
		</div>
	)
}
