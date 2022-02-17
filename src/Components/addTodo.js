import React, { useState } from "react";

const AddTodo = ({ setTodoList }) => {
  const [todo, setTodo] = useState({
    name: "",
    complete: false,
    id: Date(),
  });

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const add = (todo) => {
    setTodoList((old) => [...old, todo]);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add(todo);
          setTodo({ name: "", complete: false, id: Date() });
        }}
      >
        <input
          name="name"
          value={todo.name}
          onChange={(e) => handleChange(e)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
