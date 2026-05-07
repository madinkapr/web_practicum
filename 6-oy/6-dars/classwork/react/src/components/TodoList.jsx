import { TodoItem } from "./TodoItem"

export function TodoList({ todos }) {
    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            isCompleted={false}
                        />
                    ))
                }
            </ul>
        </>
    )
}

