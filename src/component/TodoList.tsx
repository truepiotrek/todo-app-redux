import {FC} from "react";

interface TodoListProps {
  items: {id: string, text: string}[]
}

export const TodoList: FC<TodoListProps> = ({ items}) => {
  return <ul>
    {items.map(todo => <li key={todo.id}>{todo.text}</li> )}
  </ul>
}
