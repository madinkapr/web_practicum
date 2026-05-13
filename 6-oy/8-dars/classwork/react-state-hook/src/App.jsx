import { Routes, Route } from "react-router"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Post } from "./Pages/Post"
import "./App.css"

export function App() {

	return (
		<Routes>
			<Route path="/" element={ <Home /> } />
			<Route path="/about" element={ <About /> } />
			<Route path="/posts/:id" element={ <Post /> } />
		</Routes>
	)
}
