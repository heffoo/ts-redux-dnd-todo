import React, { FC, useState, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { TaskType } from "../types/types";
import { delTask, toggleTask, editTask } from "../action/actions";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import { useAppSelector } from "../store/store";

import "./Task.scss";
interface Props {
  todo: TaskType;
  index: number;
  setSortTasks:  Dispatch<SetStateAction<any>>
}

let currentTask : TaskType | null = null;

export const Task: FC<Props> = ({ todo, setSortTasks }) => {
  const todos = useAppSelector((store) => store.app);
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const [taskList, setTaskList] = useState(todos);

  // const [currentTask, setСurrentTask] = useState<TaskType | null>(null);

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

  console.log("currentTask", currentTask);

  const onDragStartHandler = (e: any, todo: any) => {
    // setСurrentTask(todo);
    currentTask = todo;
  };
  const onDragEndHandler = (e: any) => {
    e.target.style.background = "white";
  };
  const onDragOverHandler = (e: any) => {
    e.preventDefault();
    e.target.style.background = "lightgray";
  };
  const onDropHandler = (e: any, todo: any) => {
    e.preventDefault();

    const sortTasks = (a: any, b: any) => {
      console.log("a,b", a.order, b.order);
      if (a.order > b.order) {
        return 1;
      } else {
        return -1;
      }
    };
    setSortTasks(sortTasks)
    setTaskList(
      todos.map((c: any) => {
        if (c.id === todo.id) {
          console.log(1, currentTask);
          return { ...c, order: currentTask?.order };
        }
        if (c.id === currentTask?.id) {
          console.log(2, currentTask);
          return { ...c, order: todo.order };
        }
        return c;
      })
    );
    e.target.style.background = "white";
  };
  console.log("drop", todo);

  return (
    <li
      className="one-task"
      draggable={true}
      onDragStart={(e) => onDragStartHandler(e, todo)}
      onDragLeave={(e) => onDragEndHandler(e)}
      onDragEnd={(e) => onDragEndHandler(e)}
      onDragOver={(e) => onDragOverHandler(e)}
      onDrop={(e) => onDropHandler(e, todo)}
    >
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
            defaultValue={todo.title.trim()}
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
