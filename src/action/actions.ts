import { AddTask, DelTask, ToggleTask } from "../types/types";
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
