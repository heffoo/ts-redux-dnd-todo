import * as consts from "../consts/consts";

export interface TaskType {
    title: string;
    completed: boolean;
    id: string;
    order: number,
    isFavorite: boolean,
  }

export interface AddTask {
    type: typeof consts.ADD_TASK;
    text: string;
}

export interface DelTask {
  type: typeof consts.DEL_TASK;
  id: string;
}

export interface ToggleTask {
  type: typeof consts.TOGGLE_TASK;
  id: string;
}

export interface EditTask {
  type: typeof consts.EDIT_TASK;
  id: string;
  value: string;
}

export interface SetTasks {
  type: typeof consts.SET_TASKS
  tasks: Array<TaskType>
}

export interface SetFavorite {
  type: typeof consts.SET_FAVORITE
  id: string;
}

export type ActionTypes = AddTask | DelTask | ToggleTask | EditTask | SetTasks | SetFavorite;