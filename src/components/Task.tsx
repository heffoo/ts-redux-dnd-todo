import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { TaskType } from "../types/types";
import { delTask, toggleTask } from "../action/actions";

import "./Task.scss";
interface Props {
  todo: TaskType;
  index: number;
}

export const Task: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTask = (id: string) => {
    dispatch(delTask(id));
  };
  const toggTask = (id: string) => {
    dispatch(toggleTask(id));
  };

  return (
    <li className="one-task">
      <input type="checkbox" checked={todo.completed} onChange={() => toggTask(todo.id)}/>
      <div>{todo.title}</div>
      <button onClick={() => deleteTask(todo.id)}> x </button>
    </li>
  );
};
