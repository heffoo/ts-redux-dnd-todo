import { AddTask, DelTask } from "../types/types";
import * as consts from "../consts/consts";
import { v4 as uuidv4 } from "uuid";


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
