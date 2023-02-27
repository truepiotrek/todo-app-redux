import {FC, useState} from "react";

import { TodoList} from "./component/TodoList";
import { NewTodo } from "./component/NewTodo";
import {TodoProps} from "./todo.model";


const App: FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const todoHandler = (text: string) => {
    setTodos([{id: Math.random().toString(), text: text}])
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
