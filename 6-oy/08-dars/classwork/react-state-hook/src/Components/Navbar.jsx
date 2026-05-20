import { NavLink, useNavigate } from "react-router"

export function Navbar() {

	const go = useNavigate()

	return (
		<nav>
			<ul>
				<li>
					<button
						onClick={ () => go( "/" ) }
					>Home</button>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
			</ul>
		</nav>
	)
}
