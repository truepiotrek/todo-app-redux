import {FC, useState} from "react";

import { TodoList} from "./component/TodoList";
import { NewTodo } from "./component/NewTodo";
import {TodoProps} from "./todo.model";


const App: FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const todoHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoHandler} />
      <TodoList onTodoDelete={todoDeleteHandler} items={todos} />
    </div>
  );
}

export default App;
