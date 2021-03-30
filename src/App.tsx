import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./action/actions";
import { useState } from "react";
import appReducer from "./reducers/reducer";

import "./App.css";
import { useAppSelector } from "./store/store";

function App() {
  const todos = useAppSelector((store) => store.app);

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const newTask = (text: string) => {
    dispatch(addTask(text));
  };
console.log('23', todos[0].title)
  return (
    <div className="App">
      <div className="main-container">
        <input className="addtask-input" value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        {todos.map((todo) => (
          <div>{todo.title}</div>
        )
        )}
      </div>
    </div>
  );
}

export default App;
