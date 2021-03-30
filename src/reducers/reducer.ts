import { ActionTypes } from "./../types/types";

interface AppState {
  title: string;
  completed: boolean;
}

const InitialState: AppState[] = [{ title: "123", completed: false }];

export default function appReducer(state = InitialState, action: ActionTypes): AppState[] {
  switch (action.type) {
    case "ADD_TASK": {
      return [{ title: action.text, completed: false }, ...state];
    }
    // case "DELETE_TODO":
    //     break;
    // case "EDIT_TODO":
    //     break;
    default:
      return state;
  }
}
