import * as consts from "../consts/consts";

export interface TaskType {
  title: string;
  completed: boolean;
  id: string;
  order: number;
  isFavorite: boolean;
}

export interface ListType {
  title: string;
  id: string;
  tasks?: Array<TaskType>;
}

export interface AppState {
  activeList: null | string;
}

export interface AddTask {
  type: typeof consts.ADD_TASK;
  listId: null | string;
  text: string;
}

export interface DelTask {
  type: typeof consts.DEL_TASK;
  id: string;
  listId: null | string;
}

export interface ToggleTask {
  type: typeof consts.TOGGLE_TASK;
  id: string;
  listId: null | string;
}

export interface EditTask {
  type: typeof consts.EDIT_TASK;
  id: string;
  value: string;
  listId: null | string
}

export interface SetTasks {
  type: typeof consts.SET_TASKS;
  listId: string,
  tasks: Array<TaskType>;
}

export interface SetFavorite {
  type: typeof consts.SET_FAVORITE;
  id: string;
}

export interface AddNewList {
  type: typeof consts.ADD_NEW_LIST;
  listTitle: string;
}

export interface SetActiveList {
  type: typeof consts.SET_ACTIVE_LIST;
  listId: null | string;
}

export type ActionTypes =
  | AddTask
  | DelTask
  | ToggleTask
  | EditTask
  | SetTasks
  | SetFavorite
  | AddNewList
  | SetActiveList;
