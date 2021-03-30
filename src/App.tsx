import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./action/actions";
import { useState } from "react";

import "./App.scss";
import { useAppSelector } from "./store/store";

function App() {
  const todos = useAppSelector((store) => store.app);

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  console.log("23", todos[0].title);
  return (
    <div className="App">
      <div className="main-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTask(value));
            setValue('')
          }}
        >
          <input className="addtask-input" value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        </form>
        {todos.map((todo) => (
          <div>{todo.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
