import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"

const Home = lazy( () => import( "./Pages/Home" ) )
const Posts = lazy( () => import( "./Pages/Posts" ) )

export default function App() {

  return (
    <Routes>
      <Route path="/" element={ (
        <Suspense fallback={ <>Loading...</> }>
          <Home/>
        </Suspense>
      ) } />
      <Route path="/posts" element={ (
        <Suspense fallback={ <>Loading...</> }>
          <Posts/>
        </Suspense>
      ) } />
    </Routes>
  )
}
