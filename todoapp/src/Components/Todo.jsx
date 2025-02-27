import { useState } from "react";
import Foorm from "./Foorm";
import TodoList from "./TodoList";
export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Foorm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
