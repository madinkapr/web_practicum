import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Card, Cards } from './components/Card'
import { TodoList } from './components/TodoList'

export default function App() {

  const books = [
    { id: 1, name: "Mehrobdan chayon", price: 20 },
    { id: 2, name: "O'tgan kunlar", price: 30 },
    { id: 3, name: "Kecha va kunduz", price: 40 }
  ]

  const todos= [
    { id: 1, title: "React o'rganish", completed: false },
    { id: 2, title: "Vazifalarni bajarish", completed: true },
    { id: 3, title: "Kitob o'qish", completed: false },
    { id: 4, title: "Sport bilan shug'ullanish", completed: true },
    { id: 5, title: "Do'stlar bilan uchrashish", completed: false }
  ]

  const isSelected = true

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

      {isSelected && <>OK</>}

      <TodoList todos={todos} />
    </>
  )
}