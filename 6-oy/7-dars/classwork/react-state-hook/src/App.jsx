import { useState } from "react"
import "./App.css"

export function App() {

	const [todos, setTodos] = useState([])
	const [query, setQuery] = useState("")

	const onKeyUp = event => {

		if (event.code === "Enter") {

			const name = event.target.value
			const todo = { id: crypto.randomUUID(), name, isCompleted: false }

			setTodos([todo, ...todos])
			setQuery("")

			event.target.value = null
		}
	}

	const onChangeUp = event => setQuery(event.target.value)

	const filteredTodos = todos.filter( todo => todo.name.toLowerCase().includes( query.toLowerCase() ) )	

	const removeTodo = todo => {

		setTodos(todos.filter(t => t.id !== todo.id))
	}

	const toggleTodo = todo => {

		setTodos(todos.map(t => t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t))
	}

	return (
		<>
			<input onKeyUp={onKeyUp} onChange={onChangeUp} placeholder="Add todo and search ..." />

			<ul className="todos">
				{
					filteredTodos.map(todo => (
						<li key={todo.id}>
							<span
								onClick={() => toggleTodo(todo)}
								style={{ textDecoration: todo.isCompleted ? "line-through" : "none", cursor: "pointer" }} 
							>
								{todo.name}
							</span>
							<button onClick={() => removeTodo(todo)}>DELETE</button>
						</li>
					))
				}
			</ul>
		</>
	)
}
