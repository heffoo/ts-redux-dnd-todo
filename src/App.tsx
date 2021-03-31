import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./action/actions";
import { useState } from "react";
import { TaskType } from "./types/types";

import "./App.scss";
import { useAppSelector } from "./store/store";
import { Task } from "./components/Task";

function App() {
  const todos = useAppSelector((store) => store.app);

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todos));
  }, [todos]);

  console.log("23", todos);
  return (
    <div className="App">
      <div className="main-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTask(value));
            setValue("");
          }}
        >
          <input className="addtask-input" value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        </form>
        <ul>
          {todos.map((todo: TaskType, index) => (
            <Task key={todo.id} index={index} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
