import { useState } from "react";
import styles from "./foorm.module.css";
export default function Foorm({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmitt(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form class={styles.todoform} onSubmit={handleSubmitt}>
      <div className={styles.inputContainer}>
        <input
          class={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type='text'
          placeholder='Enter todo item'
        />
        <button className={styles.modernButton} type='submit'>
          Add
        </button>
      </div>
    </form>
  );
}
