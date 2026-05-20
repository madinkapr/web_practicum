import { useState, useMemo, memo } from "react"

const POSTS = [
	{ id: 1, title: "React nima?", category: "react" },
	{ id: 2, title: "JavaScript asoslari", category: "js" },
	{ id: 3, title: "CSS Grid", category: "css" },
	{ id: 4, title: "React Hooks", category: "react" },
	{ id: 5, title: "TypeScript", category: "js" },
]

const COLORS = {
	react: { bg: "#1f3a5f", color: "#58a6ff" },
	js:    { bg: "#3a3000", color: "#e3b341" },
	css:   { bg: "#1a3a2a", color: "#3fb950" },
}

const PostCard = memo( function PostCard( { post } ) {
	console.log( "PostCard render:", post.title )
	return (
		<div className="card">
			<span className="card-name">{ post.title }</span>
			<span className="card-badge" style={ COLORS[ post.category ] }>
				{ post.category }
			</span>
		</div>
	)
} )

export default function Posts() {

	const [ category, setCategory ] = useState( "all" )

	const filtered = useMemo( () => {
		console.log( "useMemo: filter hisoblanyapti..." )
		if ( category === "all" ) return POSTS
		return POSTS.filter( p => p.category === category )
	}, [ category ] )

	return (
		<main className="main">
			<h1 className="page-title">Maqolalar</h1>

			<div className="controls">
				<div className="control-group">
					<label>Kategoriya:</label>
					<select onChange={ e => setCategory( e.target.value ) }>
						<option value="all">Barchasi</option>
						<option value="react">React</option>
						<option value="js">JavaScript</option>
						<option value="css">CSS</option>
					</select>
				</div>
			</div>

			<div className="card-list">
				{ filtered.map( post => <PostCard key={ post.id } post={ post } /> ) }
			</div>
		</main>
	)
}
