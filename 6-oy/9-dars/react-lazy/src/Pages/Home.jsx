import { useState } from "react"
import Header from "../Components/Header"
import Main from "../Components/Main"
import Footer from "../Components/Footer"

function t( language, prop, value = "" ) {

	const translates = {
		en: {
			welcomeMessage: `Welcome to ${ value }!`,
			attemps: `You have ${ value } attemps.`,
		},
		uz: {
			welcomeMessage: `${ value } ga xush kelibsiz!`,
			attemps: `Sizda ${ value } urinishlar qoldi.`,
		}
	}

	return translates[ language ][ prop ]
}

export default function () {

	const [ language, setLanguage ] = useState( "en" )

	return (
		<>
			<Header count={ ( Math.random() * 100 ) | 0 } />
			<Main>
				<h1>{ t( language, "attemps", 20 ) }</h1>

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
