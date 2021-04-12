import { SetActiveList } from "./../types/types";

import { AddTask, DelTask, ToggleTask, EditTask, TaskType, SetFavorite } from "../types/types";
import * as consts from "../consts/consts";

export const addTask = (text: string, listId: null | string): AddTask => {
  return {
    type: consts.ADD_TASK,
    listId,
    text: text,
  };
};
export const delTask = (id: string, listId: null | string): DelTask => {
  return {
    type: consts.DEL_TASK,
    id: id,
    listId,
  };
};
export const toggleTask = (id: string, listId: null | string): ToggleTask => {
  return {
    type: consts.TOGGLE_TASK,
    id: id,
    listId,
  };
};

export const editTask = (id: string, value: string, listId: null | string): EditTask => {
  return {
    type: consts.EDIT_TASK,
    id: id,
    value: value,
    listId,
  };
};

export const setTasks = (tasks: Array<TaskType>, listId: any) => ({
  type: consts.SET_TASKS,
  listId,
  tasks,
});

export const setFavorite = (id: string): SetFavorite => ({
  type: consts.SET_FAVORITE,
  id: id,
});

export const AddNewList = (listTitle: string) => ({
  type: consts.ADD_NEW_LIST,
  listTitle,
});

export const setActiveList = (listId: null | string): SetActiveList => ({
  type: consts.SET_ACTIVE_LIST,
  listId,
});
