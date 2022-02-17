import React, { useState } from "react";
import Todo from "./todo";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
