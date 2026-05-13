import { useState, useEffect } from "react"
import "./App.css"

export function App() {

	const [ isLoading, setIsLoading ] = useState( true )
	const [ albumId, setAlbumId ] = useState( 1 )
	const [ photos, setPhotos ] = useState( [] )

	useEffect( () => {

		fetch( `https://jsonplaceholder.typicode.com/photos?albumId=${ albumId }` )
			.then( response => response.json() )
			.then( json => {

				setIsLoading( false )
				setPhotos( json )
			} )

	}, [ albumId ] )

	return (
		<>
			<select
				defaultValue={ albumId }
				onChange={ e => setAlbumId( e.target.value ) }
			>
				<option value={ 1 }>Album 1</option>
				<option value={ 2 }>Album 2</option>
				<option value={ 3 }>Album 3</option>
			</select>

			{ isLoading && <div className="loader"></div> }

			<ul>
				{
					photos.map( photo => <li key={ photo.id }>
						<img src={ photo.url } alt={ photo.title } />
					</li> )
				}
			</ul>
		</>
	)
}
