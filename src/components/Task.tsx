import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { TaskType } from "../types/types";
import { delTask, toggleTask, editTask } from "../action/actions";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
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
    if (value.length) {
      dispatch(editTask(id, value));
      setEditMode(!isEditMode);
    }
  };

  return (
    <li className="one-task">
      <div className="task-title">
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          checked={todo.completed}
          onChange={() => toggTask(todo.id)}
        />
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
      </div>

      <div className="task-buttons">
        {!isEditMode ? (
          <EditIcon className="task-button" onClick={() => setEditMode(!isEditMode)} />
        ) : (
          <SaveIcon className="task-button" onClick={() => editFunc(todo.id)} />
        )}
        <CloseIcon className="task-button" onClick={() => deleteTask(todo.id)} />
      </div>
    </li>
  );
};
