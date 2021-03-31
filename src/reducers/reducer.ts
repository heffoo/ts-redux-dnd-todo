import { ActionTypes } from "./../types/types";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "../types/types";
import * as consts from "../consts/consts";
const InitialState: TaskType[] = [{ title: "123", completed: false, id: uuidv4() }];

export default function appReducer(state = InitialState, action: ActionTypes): TaskType[] {
  switch (action.type) {
    case consts.ADD_TASK: {
      return [{ title: action.text, completed: false, id: uuidv4() }, ...state];
    }
    case consts.DEL_TASK: {
      return [...state.filter((task) => task.id !== action.id)];
    }

    // case "EDIT_TODO":
    //     break;
    default:
      return state;
  }
}
