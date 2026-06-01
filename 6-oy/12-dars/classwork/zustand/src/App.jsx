import { useTodoStore } from './useTodo.store.js'
import { useState } from 'react'

export default function App() {
  const [todo, setTodo] = useState('')
  const { todos, addTodo } = useTodoStore()

  return (
    <div className="p-4">
      <form>
        <h1 className="text-2xl font-bold">
          Todo List
        </h1>
        <input
          type="text"
          value={todo}
          className="border p-2"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="button"
          className="bg-blue-900 text-white p-2 ml-2"
          onClick={() => {
            addTodo(todo)
            setTodo('')
          }}>Add Todo</button>
      </form>


      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}
