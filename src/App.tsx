import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./action/actions";
import { useState } from "react";
import { TaskType } from "./types/types";
import TextField from "@material-ui/core/TextField";
import "./App.scss";
import { useAppSelector } from "./store/store";
import { Task } from "./components/Task";
import { UpperTabs } from "./components/upper-tabs/upperTabs";
import { SidePanel } from "./components/side-panel/sidePanel";

function App() {
  const list = useAppSelector((store) => store.list);
  let activeList = useAppSelector((store) => store.app.activeList);
  if (activeList === null) {
    activeList = list[0].id;
  }
  const todos = list.find((item) => activeList === item.id)?.tasks || [];

  const [value, setValue] = useState("");
  const [taskState, setTaskState] = useState<string>("allTasks");
  const [isFiltered, setFiltered] = useState<boolean>(false);
  // const [modal, setModal] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const sortTasks = (a: TaskType, b: TaskType) => {
    if (a.order < b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  const notCheckedTasks = todos.filter((task) => !task.completed);
  const CheckedTasks = todos.filter((task) => task.completed);
  const FavoriteTasks = todos.filter((task) => task.isFavorite);

  let currentArray: any =
    taskState === "allTasks"
      ? todos
      : taskState === "notCompleted"
      ? notCheckedTasks
      : taskState === "Favorite"
      ? FavoriteTasks
      : taskState === "Completed" && CheckedTasks;

  return (
    <div className="App">
      {/* {modal ? ( */}
      {/* //   <ModalPortal>
        //     <Modal setModal={setModal}/>
        //   </ModalPortal>
        // ) : (
        //   ""
        // )} */}
      {/* <UpperTabs todos={todos} setFiltered={setFiltered} setTaskState={setTaskState} /> */}
      <SidePanel key={activeList} />
      <div className="main-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTask(value, activeList));
            setValue("");
          }}
        >
          <TextField
            type="text"
            className="addtask-input"
            id="standard-basic"
            label="Введите задачу"
            value={value}
            onChange={(e) => setValue(e.target.value.trim())}
          />
        </form>

        <div className="modals" id="modals"></div>
        <ul className="todo-list">
          <div className="block-scroll-wrapper">
            <div className="block-scroll">
              {currentArray.sort(sortTasks).map((todo: TaskType, index: number, todos: Array<TaskType>) => (
                <Task key={todo.id} index={index} isFiltered={isFiltered} todo={todo} todos={todos} />
              ))}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
