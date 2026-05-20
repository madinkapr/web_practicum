import { useState } from "react"
import Header from "../Components/Header"
import Main from "../Components/Main"
import Footer from "../Components/Footer"

const t = {
	en: {
		home: "Home",
	},
	uz: {
		home: "Bosh sahifa",
	},
}

export default function () {

	const [ language, setLanguage ] = useState( "en" )

	return (
		<>
			<Header count={ ( Math.random() * 100 ) | 0 } />
			<Main>
				<h1>{ t[ language ].home }</h1>

				<select
					defaultValue={ language }
					onChange={ e => setLanguage( e.target.value ) }
				>
					<option value="en">English</option>
					<option value="uz">O'zbekcha</option>
				</select>
			</Main>
			<Footer />
		</>
	)
}
