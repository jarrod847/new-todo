import React from "react";

const Todo = ({ todo }) => {
  const date = todo.id.split(" ");
  return (
    <div className="todo">
      <div className="name-complete">
        <p>Name: {todo.name}</p>
        <p>Completed: {todo.complete ? <b>Yes</b> : <b>No</b>}</p>
      </div>
      <p>
        Created on: {date[1]} {date[2]} {date[3]}
      </p>
    </div>
  );
};

export default Todo;
