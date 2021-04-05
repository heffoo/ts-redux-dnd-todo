import * as consts from "../consts/consts";

export interface TaskType {
    title: string;
    completed: boolean;
    id: string;
    order: number,
  }

export interface AddTask {
    type: 'ADD_TASK';
    text: string;
}

export interface DelTask {
  type: 'DEL_TASK';
  id: string;
}

export interface ToggleTask {
  type: 'TOGGLE_TASK';
  id: string;
}

export interface EditTask {
  type: 'EDIT_TASK';
  id: string;
  value: string;
}

export interface SetTasks {
  type: typeof consts.SET_TASKS
  tasks: Array<TaskType>
}

export type ActionTypes = AddTask | DelTask | ToggleTask | EditTask | SetTasks;