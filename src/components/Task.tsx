import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { TaskType } from "../types/types";
import { delTask, toggleTask, editTask } from "../action/actions";

import "./Task.scss";
interface Props {
  todo: TaskType;
  index: number;
}

export const Task: FC<Props> = ({ todo }) => {
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const dispatch = useDispatch();

  const deleteTask = (id: string) => {
    dispatch(delTask(id));
  };

  const toggTask = (id: string) => {
    dispatch(toggleTask(id));
  };

  const editFunc = (id: string) => {
    const value = (document.getElementsByClassName("editTaskInput")[0] as HTMLInputElement).value;

    console.log("id", id, value);
    dispatch(editTask(id, value));
    setEditMode(!isEditMode);
  };

  return (
    <li className="one-task">
      <input type="checkbox" checked={todo.completed} onChange={() => toggTask(todo.id)} />
      {!isEditMode ? (
        <p>{todo.title}</p>
      ) : (
        <input
          type="text"
          className="editTaskInput"
          defaultValue={todo.title}
          onKeyPress={(e) => e.key === "Enter" && editFunc(todo.id)}
        />
      )}
      {!isEditMode ? (
        <button onClick={() => setEditMode(!isEditMode)}>edit</button>
      ) : (
        <button onClick={() => editFunc(todo.id)}>save</button>
      )}
      <button onClick={() => deleteTask(todo.id)}> x </button>
    </li>
  );
};
