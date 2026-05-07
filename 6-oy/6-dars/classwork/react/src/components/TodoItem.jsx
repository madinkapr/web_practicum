export function TodoItem({title, completed}) {
    return (
        <li>
            <p style={{ textDecoration: completed ? "line-through" : "none" }}>{title}</p>
        </li>
    )
}