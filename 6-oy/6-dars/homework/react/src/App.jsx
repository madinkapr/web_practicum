import { TodoList } from './components/TodoList'

export default function App() {
  const todos = [
    { id: 1, title: "React o'rganish", completed: false },
    { id: 2, title: "Vazifalarni bajarish", completed: true },
    { id: 3, title: "Kitob o'qish", completed: false },
    { id: 4, title: "Sport bilan shug'ullanish", completed: true },
    { id: 5, title: "Do'stlar bilan uchrashish", completed: false }
  ]

    return (
    <>
      <TodoList todos={todos} />
    </>
  )
}