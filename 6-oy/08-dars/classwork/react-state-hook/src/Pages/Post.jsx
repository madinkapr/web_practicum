import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Navbar } from "../Components/Navbar"

export function Post() {

	const { id } = useParams()
	const [ post, setPost ] = useState( null )

	useEffect( () => {

		fetch( `https://jsonplaceholder.typicode.com/posts/${ id }` )
			.then( response => response.json() )
			.then( json => setPost( json ) )

	}, [ id ] )

	return <>

		<Navbar />

		{
			post && <PostComponent post={ post } />
		}
	</>
}

function PostComponent( { post } ) {

	return <>{ post.title }</>
}
