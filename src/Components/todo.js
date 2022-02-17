import React from "react";

const Todo = ({ todo }) => {
  <div>
    <p>{todo.name}</p>
    <p>{todo.complete}</p>
    <p>{todo.date}</p>
  </div>;
};

export default Todo;
