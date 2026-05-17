import { lazy, Suspense } from "react"
import { Routes, Route, NavLink } from "react-router"

const Home = lazy( () => import( "./Pages/Home" ) )
const Posts = lazy( () => import( "./Pages/Posts" ) )

function Loading() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <span>Yuklanmoqda...</span>
    </div>
  )
}

export default function App() {

  return (
    <>
      <nav className="nav">
        <NavLink to="/" end className={ ( { isActive } ) => isActive ? "nav-link active" : "nav-link" }>Home</NavLink>
        <NavLink to="/posts" className={ ( { isActive } ) => isActive ? "nav-link active" : "nav-link" }>Posts</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={ (
          <Suspense fallback={ <Loading /> }>
            <Home />
          </Suspense>
        ) } />
        <Route path="/posts" element={ (
          <Suspense fallback={ <Loading /> }>
            <Posts />
          </Suspense>
        ) } />
      </Routes>
    </>
  )
}
