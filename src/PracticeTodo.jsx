import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function PracticeTodo() {
  let [todo, setTodo] = useState([{ task: "eating", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");
  let updatetodo = (event) => {
    setNewTodo(event.target.value);
  };
  let addTodo = () => {
    setTodo((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let toUpperCaseAll = () => {
    setTodo((prevTodo) =>
      prevTodo.map((item) => {
        return {
          ...item,
          task: item.task.toUpperCase(),
        };
      })
    );
  };
  return (
    <>
      <input
        placeholder="Write the task here!"
        value={newTodo}
        onChange={updatetodo}
      ></input>
      <br /> <br />
      <button onClick={addTodo}>Add</button>
      <hr></hr>
      <h1>Todo List</h1>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
      <button onClick={toUpperCaseAll}>ToUpperCase</button>
    </>
  );
}
