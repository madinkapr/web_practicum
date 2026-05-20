import { Navbar } from "../Components/Navbar"
import { NavLink } from "react-router"

export function Home() {

	return (
		<>
			<Navbar />
			
			<div className="page">
				<div className="home-hero">
					<span className="home-hero__badge">Welcome</span>
					<h1 className="home-hero__title">Explore articles<br />& ideas</h1>
					<p className="home-hero__sub">
						Browse through a collection of posts, read insights, and dive into the conversations.
					</p>
					<NavLink to="/posts" className="home-hero__btn">Browse Posts →</NavLink>
				</div>
			</div>
		</>
	)
}
