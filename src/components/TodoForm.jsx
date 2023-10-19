import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

const handleSubmit = e =>{
  e.preventDefault();  //by default when you hit submit the page reloads so this e.preventDefault() function stops that
  console.log(value)
  
}

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
