import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/addTodo";
import TodoList from "./Components/todoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <h2>Todo List</h2>
      <AddTodo setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
