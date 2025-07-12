import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todolist() {
  let [todoArr, setTodoArr] = useState([
    { task: "eating", id: uuidv4(), done: false },
  ]);
  let [newTodo, setNewTodo] = useState("");
  let btnclick = () => {
    setTodoArr((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), done: false }];
    });
    setNewTodo("");
  };
  let updatetodo = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodoArr((prevTodos) =>
      todoArr.filter((prevTodos) => prevTodos.id != id)
    );
  };
  let uppercaseAll = () => {
    setTodoArr((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };
  let upperCaseOne = (id) => {
    setTodoArr((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };
  let markAsDone = (id) => {
    setTodoArr((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <>
      <input
        placeholder="add a task"
        value={newTodo}
        style={{width:"250px",height:"30px",borderRadius:"40px", border:"2px solid black",}}
        onChange={updatetodo}
      ></input>
      <br></br> <br></br>
      <button onClick={btnclick}>Add a task</button>
      <hr></hr>
      <h3>Todo List</h3>
      <ul>
        {todoArr.map((todo) => {
          return (
            <>
              <li key={todo.id}>
                <input
                  type="checkbox"
                  style={{ width: "20px", height: "20px" }}
                  checked={todo.done}
                  onChange={() => markAsDone(todo.id)}
                />
                &nbsp; &nbsp;
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                >
                  {todo.task}
                </span>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                &nbsp; &nbsp;
                <button onClick={() => upperCaseOne(todo.id)}>
                  UpperCase One
                </button>
              </li>
            </>
          );
        })}
      </ul>
      <br /> <br />
      <button onClick={uppercaseAll}>ToUpperCase</button>
    </>
  );
}
