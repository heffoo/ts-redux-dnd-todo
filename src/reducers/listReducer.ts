import { ActionTypes } from "../types/types";
import { v4 as uuidv4 } from "uuid";
import { TaskType, ListType } from "../types/types";
import * as consts from "../consts/consts";
import { Task } from "../components/Task";

const InitialState: ListType[] = JSON.parse(localStorage.getItem("data") as string) || [];

export default function listReducer(state = InitialState, action: ActionTypes): ListType[] {
  switch (action.type) {
    case consts.ADD_NEW_LIST: {
      return [...state, { title: action.listTitle, id: uuidv4(), tasks: [] }];
    }

    case consts.ADD_TASK: {
      return state.map((list: ListType) => {
        if (list.id === action.listId && list.tasks) {
          return {
            ...list,
            tasks: [
              ...list.tasks,
              { title: action.text, completed: false, id: uuidv4(), order: list.tasks.length + 1, isFavorite: false },
            ],
          };
        }
        return list;
      });
    }

    case consts.DEL_TASK: {
      return state.map((list: ListType) => {
        if (list.id === action.listId && list.tasks) {
          return {
            ...list,
            tasks: list.tasks.filter((task) => task.id !== action.id),
          };
        }
        return list;
      });
    }

    case consts.TOGGLE_TASK: {
      return state.map((list: ListType) => {
        if (list.id === action.listId && list.tasks) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === action.id) {
                return { ...task, completed: !task.completed };
              }
              return task;
            }),
          };
        }
        return list;
      });
    }


    case consts.EDIT_TASK: {
      return state.map((list: ListType) => {
        if (list.id === action.listId && list.tasks) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === action.id) {
                return { ...task, title: action.value };
              }
              return task;
            }),
          };
        }
        return list;
      });
    }

    case consts.SET_TASKS: {
      state.forEach((list: ListType) => {
        if (list.id === action.listId) {
          return action.tasks;
        }
      });
      return action.tasks;
    }
    // case consts.SET_FAVORITE: {
    //   return state.map((task) => (task.id === action.id ? { ...task, isFavorite: !task.isFavorite } : task));
    // }

    default:
      return state;
  }
}
