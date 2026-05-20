import { useContext } from "react"
import { LanguageContext } from "../Contexts/LanguageContext"

export default function Choose() {

    const [ language, setLanguage ] = useContext( LanguageContext )
    const className = `search ${ language}`

    return (
        <select
				defaultValue={ language }
				onChange={ e => setLanguage( e.target.value ) }
			>
				<option value="english">English</option>
				<option value="uzbek">Uzbek</option>
			</select>
    )
}