import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { TaskType, AppState } from "../types/types";
import { delTask, toggleTask, editTask, setTasks, setFavorite } from "../action/actions";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from "@material-ui/icons/Close";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";

import star from "../images/star.png";
import starLiked from "../images/starliked.png";

import "./Task.scss";
import { useAppSelector } from "../store/store";

interface Props {
  todo: TaskType;
  index: number;
  todos: Array<TaskType>;
  isFiltered: any;
}
let currentTask: TaskType | null = null;

export const Task: FC<Props> = ({ todo, todos, isFiltered }) => {
  const [isEditMode, setEditMode] = useState<boolean>(false);

  const dispatch = useDispatch();

  const list = useAppSelector((store) => store.list);
  const activeList = useAppSelector((store) => store.app.activeList);

  const deleteTask = (id: string) => {
    dispatch(delTask(id, activeList));
  };

  const toggTask = (id: string) => {
    dispatch(toggleTask(id,activeList));
  };

    const setLike = (id: string) => {
      dispatch(setFavorite(id))
    }

  const editFunc = (id: string) => {
    const value = (document.getElementsByClassName("editTaskInput")[0] as HTMLInputElement).value;
    console.log('todo', id)
    if (value.length) {
      dispatch(editTask(id, value, activeList));
      setEditMode(!isEditMode);
    }
  };

  const onDragStartHandler = (e: any, todo: TaskType) => {
    currentTask = todo;
  };

  const onDragEndHandler = (e: any) => {
    e.target.style.transition = "0.3s";
    e.target.style.background = "white";
  };

  const onDragOverHandler = (e: any) => {
    e.preventDefault();
    e.target.style.background = "lightgray";
  };

  const onDropHandler = (e: any, todo: any) => {
    e.preventDefault();
    const todoMapped = todos.map((c: TaskType) => {
      if (c.id === todo.id) {
        return { ...c, order: currentTask?.order };
      }
      if (c.id === currentTask?.id) {
        return { ...c, order: todo.order };
      }
      return c;
    });

    dispatch(setTasks(todoMapped, activeList));
    e.target.style.background = "white";
  };

  return (
    <li
      className="one-task"
      draggable={!isFiltered}
      onDragStart={(e) => onDragStartHandler(e, todo)}
      onDragLeave={(e) => onDragEndHandler(e)}
      onDragEnd={(e) => onDragEndHandler(e)}
      onDragOver={(e) => onDragOverHandler(e)}
      onDrop={(e) => onDropHandler(e, todo)}
    >
      <div className="task-title">
        <button className="like-button" >
          <img className="button-star" alt='img' src={todo.isFavorite ? starLiked : star} onClick={() => setLike(todo.id)}></img>
        </button>
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
