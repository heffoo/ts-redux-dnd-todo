import {AddTask, DelTask, ToggleTask, EditTask, TaskType} from "../types/types";
import * as consts from "../consts/consts";

export const addTask = (text: string): AddTask => {
  return {
    type: consts.ADD_TASK,
    text: text,
  };
};
export const delTask = (id: string): DelTask => {
  return {
    type: consts.DEL_TASK,
    id: id,
  };
};
export const toggleTask = (id: string): ToggleTask => {
  return {
    type: consts.TOGGLE_TASK,
    id: id,
  };
};

export const editTask = (id: string, value: string): EditTask => {
  return {
    type: consts.EDIT_TASK,
    id: id,
    value: value,
  };
};

export const setTasks = (tasks: Array<TaskType>) => ({
  type: consts.SET_TASKS,
  tasks
})

export const setFavorite = (id: string) => ({
  type: consts.SET_FAVORITE,
  id: id,
})
