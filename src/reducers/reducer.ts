import { ActionTypes } from "./../types/types";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "../types/types";
import * as consts from "../consts/consts";

const InitialState: TaskType[] = JSON.parse(localStorage.getItem("data") as string) || [];

export default function appReducer(state = InitialState, action: ActionTypes): TaskType[] {
  switch (action.type) {
    case consts.ADD_TASK: {
      return [{ title: action.text, completed: false, id: uuidv4(), order: state.length + 1 }, ...state];
    }
    case consts.DEL_TASK: {
      return [...state.filter((task) => task.id !== action.id)];
    }
    case consts.TOGGLE_TASK: {
      return state.map((task) => (task.id === action.id ? { ...task, completed: !task.completed } : task));
    }
    case consts.EDIT_TASK: {
      console.log(action.value.length);
      return state.map((task) => (task.id === action.id ? { ...task, title: action.value } : task));
    }
    case consts.SET_TASKS: {
      return action.tasks
    }
    default:
      return state;
  }
}
