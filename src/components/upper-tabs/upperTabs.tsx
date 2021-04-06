import React, { FC } from "react";
import { TaskType } from "../../types/types";

import "./upperTabs.scss";

interface Props {
  todos: Array<TaskType>;
  setTaskState: any;
  setFiltered: any;
}
export const UpperTabs: FC<Props> = ({ setTaskState, setFiltered }) => {
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
          Все задачи
        </button>
        <button className="upper-button" onClick={() => showAll("notCompleted")}>
          Незавершенные
        </button>
        <button className="upper-button" onClick={() => showAll("Completed")}>
          Завершенные
        </button>
        <button className="upper-button" onClick={() => showAll("Favorite")}>
          Важное
        </button>
      </div>
    </div>
  );
};
