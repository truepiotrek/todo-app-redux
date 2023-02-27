import {FC, FormEvent, useRef} from "react";

import "./NewTodo.css"

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

export const NewTodo: FC<NewTodoProps> = ({ onAddTodo }) => {
  const inputTextRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = inputTextRef.current!.value
    onAddTodo(enteredText)
  }
  return (
    <form onSubmit={todoSubmitHandler} className="form-control">
      <div>
        <label htmlFor="todo-text">TodoText</label>
        <input type="text" id="todo-text" ref={inputTextRef}/>
      </div>
      <button type="submit">Add</button>
    </form>
    )
}