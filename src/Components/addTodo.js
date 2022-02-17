import React, { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    name: "",
    complete: false,
    id: Date.now(),
  });

  return (
    <div>
      <input />
    </div>
  );
};

export default AddTodo;
