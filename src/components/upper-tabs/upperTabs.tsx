import React, { FC } from "react";
import { TaskType } from "../../types/types";

import "./upperTabs.scss";

interface Props {
  todos: Array<TaskType>;
  showNotChecked: any;
  setTaskState: any;
  setFiltered: any;
}
export const UpperTabs: FC<Props> = ({ todos, showNotChecked, setTaskState, setFiltered }) => {
  const showAll = (value: string) => {
    setTaskState(value);
    if (value === "allTasks") {
      setFiltered(false);
    } else setFiltered(true);
  };

  return (
    <div className="upper-tabs-container">
      <div className="upper-buttons">
        <button className="upper-button" onClick={() => showAll("allTasks")}>
          вкладка
        </button>
        <button className="upper-button" onClick={() => showAll("notCompleted")}>
          notCompl
        </button>
        <button className="upper-button" onClick={() => showAll("Completed")}>
          compl
        </button>
        <button className="upper-button">вкладка</button>
      </div>
    </div>
  );
};
