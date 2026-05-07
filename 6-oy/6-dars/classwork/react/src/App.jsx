import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Card, Cards } from './components/Card'

export default function App() {

  const books = [
    { id: 1, name: "Mehrobdan chayon", price: 20 },
    { id: 2, name: "O'tgan kunlar", price: 30 },
    { id: 3, name: "Kecha va kunduz", price: 40 }
  ]

  return (
    <>
      <Header name={"Daler"} />
      <Footer color="#ffa500" />

      <Cards>
        {
          books.map(book => (
            <Card
              key={book.id}
              name={book.name}
              price={book.price}
              onClick={() => {
                console.log(book.name)
              }}
            />
          ))
        }
      </Cards>
    </>
  )
}