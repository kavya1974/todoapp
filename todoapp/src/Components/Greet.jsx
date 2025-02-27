import { useState } from "react";
export default function Greet() {
  const [inc, setInc] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
  }
  // props.name = "sri";
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type='text'
          onChange={(e) => setInc(e.target.value)}
          value={inc}
        />
        <button type='submit'>add</button>
      </form>
    </div>
  );
}
