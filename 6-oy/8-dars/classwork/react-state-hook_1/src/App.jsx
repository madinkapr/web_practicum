import { useState, useEffect } from "react"
import "./App.css"

export function App() {

	const [ isLoading, setIsLoading ] = useState( true )
	const [ postId, setPostId ] = useState( 1 )
	const [ comments, setComments ] = useState( [] )

	useEffect( () => {

		fetch( `https://jsonplaceholder.typicode.com/comments?postId=${ postId }` )
			.then( response => response.json() )
			.then( json => {

				setIsLoading( false )
				setComments( json )
			} )

	}, [ postId ] )

	return (
		<>
			<select
				defaultValue={ postId }
				onChange={ e => setPostId( e.target.value ) }
			>
				<option value={ 1 }>Banana</option>
				<option value={ 2 }>Africa</option>
				<option value={ 3 }>Water</option>
			</select>

			{ isLoading && <div className="loader"></div> }

			<ul>
				{
					comments.map( comment => <li key={ comment.id }>
						{ comment.name }
					</li> )
				}
			</ul>
		</>
	)
}
