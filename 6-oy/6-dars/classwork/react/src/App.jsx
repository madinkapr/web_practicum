import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Card } from './components/Card'

export default function App() {
  return (
    <>
      <Header name={"Daler"} />
      <Footer color="#ffa500" />
      <Card
        name="Mehrobdan chayon"
        price={20}
      />
      <Card
        name="O'tgan kunlar"
        price={30}
      />
    </>
  )
}