import { AddTask } from "../types/types";

export const addTask = (text: string): AddTask => {
  return {
    type: "ADD_TASK",
    text: text,
  };
};
