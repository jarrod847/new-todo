import React from "react";

const Todo = ({ todo }) => {
  const date = todo.id.split(" ");
  return (
    <div>
      <p>{todo.name}</p>
      <p>Completed: {todo.complete ? <div>True</div> : <div>False</div>}</p>
      <p>
        Created on: {date[1]} {date[2]} {date[3]}
      </p>
    </div>
  );
};

export default Todo;
