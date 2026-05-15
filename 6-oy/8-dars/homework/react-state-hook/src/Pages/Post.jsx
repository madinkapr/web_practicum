import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router"
import { Navbar } from "../Components/Navbar"

export function Post() {

	const { id } = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())
			.then(json => setPost(json))
	}, [id])

	return (
		<>
			<Navbar />
			<div className="page">
				{post ? <PostDetail post={post} /> : (
					<div className="post-detail">
						<div className="skeleton skeleton--back" />
						<div className="skeleton skeleton--badge" />
						<div className="skeleton skeleton--title-lg" />
						<div className="skeleton skeleton--title-sm" />
						<div className="skeleton skeleton--body" />
					</div>
				)}
			</div>
		</>
	)
}

function PostDetail({ post }) {

	return (
		<div className="post-detail">
			<NavLink to="/posts" className="post-detail__back">← Back to posts</NavLink>
			<div className="post-detail__badge">Post #{post.id}</div>
			<h1 className="post-detail__title">{post.title}</h1>
			<p className="post-detail__body">{post.body}</p>
			<NavLink to={`/posts/${post.id}/comments`} className="post-detail__link">
				View comments →
			</NavLink>
		</div>
	)
}
