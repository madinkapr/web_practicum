import { useState, useMemo } from "react"
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

	const text = useMemo( () => {
		return t( language, "attemps", 20 )
	}, [ language ] )

	return (
		<>
			<Header count={ Math.random()*100 | 0 } />
			<Main>
				<h1 className="page-title">{ text }</h1>

				<div className="controls">
					<div className="control-group">
						<label>Til:</label>
						<select
							defaultValue={ language }
							onChange={ e => setLanguage( e.target.value ) }
						>
							<option value="en">English</option>
							<option value="uz">O'zbekcha</option>
						</select>
					</div>
				</div>
			</Main>
			<Footer />
		</>
	)
}
