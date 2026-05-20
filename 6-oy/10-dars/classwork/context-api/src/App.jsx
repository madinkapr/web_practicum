import "./App.css"
import { useState } from "react"
import Home from "./Pages/Home"
import { ThemeContext } from "./Contexts/ThemeContext"
import { LanguageContext } from "./Contexts/LanguageContext"

export default function App() {

	const [ language, setLanguage ] = useState( "english" )
	const [ theme, setTheme ] = useState( "light" )

	return (
		<ThemeContext.Provider value={ [ theme, setTheme ] }>
			<LanguageContext.Provider value={ [ language, setLanguage ] }>
				<Home />
			</LanguageContext.Provider>
		</ThemeContext.Provider>
	)
}
