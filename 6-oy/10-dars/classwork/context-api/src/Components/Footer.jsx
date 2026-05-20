import { useContext } from "react"
import { LanguageContext } from "../Contexts/LanguageContext"
import { ThemeContext } from "../Contexts/ThemeContext"

export default function Footer() {

	const [language] = useContext(LanguageContext)
	const [theme, setTheme] = useContext(ThemeContext)
	const className = `choose ${language}`

	return (
		<footer>
			<select
				defaultValue={theme}
				onChange={e => setTheme(e.target.value)}
			>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
			</select>
			<p className={className}>
				{language === "english" ?
					"Copyright © 2026 Apple Inc. All rights reserved." :
					"Mualliflik huquqi © 2026 Apple Inc. Barcha huquqlar himoyalangan."}
			</p>
		</footer>
	)
}
