import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { TaskType } from "../types/types";
import { delTask } from "../action/actions";

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

  return (
    <li className="one-task">
      <input type="checkbox" />
      <div>{todo.title}</div>
      <button onClick={() => deleteTask(todo.id)}> x </button>
    </li>
  );
};
