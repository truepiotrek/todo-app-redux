import {FC} from "react";

import "./TodoList.css"

interface TodoListProps {
  items: {id: string, text: string}[],
  onTodoDelete: (todoId: string) => void
}

export const TodoList: FC<TodoListProps> = ({ items, onTodoDelete}) => {
  return <ul>
    {items.map(todo =>
      <li key={todo.id}>
        <span>{todo.text}</span>
        <button onClick={onTodoDelete.bind(null, todo.id)}>DELETE</button>
      </li> )}
  </ul>
}
