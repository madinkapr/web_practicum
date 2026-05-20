import { NavLink, useNavigate } from "react-router"

export function Navbar() {

	const go = useNavigate()

	return (
		<nav className="navbar">
			<div className="navbar__inner">
				<span className="navbar__logo">DevBlog</span>
				<ul className="navbar__links">
					<li>
						<button onClick={() => go("/")}>Home</button>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/posts">Posts</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}
