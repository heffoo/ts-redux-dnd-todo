import React, { useState, FC } from "react";
import { useAppSelector } from "../../store/store";
import { ListType } from "../../types/types";
import { useDispatch } from "react-redux";

import "./sidePanel.scss";
import { setActiveList, AddNewList } from "../../action/actions";

interface Props {}

export const SidePanel: FC<Props> = () => {
  const lists = useAppSelector((store) => store.list);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const activeList = useAppSelector((store) => store.app.activeList);

  const [isCreatingList, setCreatingList] = useState<boolean>(false);

  const createNewList = () => {
    setCreatingList(!isCreatingList);
    dispatch(AddNewList(value));
  };

console.log(activeList)
  return (
    <div className="side-panel">
      {!isCreatingList ? (
        <button className="add-list" onClick={() => setCreatingList(!isCreatingList)}>
          +
        </button>
      ) : (
        <form onSubmit={() => createNewList()}>
          <input onChange={(e) => setValue(e.target.value.trim())} />
        </form>
      )}
      {lists.map((list: ListType) => {

        return (
          <div key={list.id}>
            <button className="side-button" onClick={() => dispatch(setActiveList(list.id))}>
              {list.title}
            </button>
          </div>
        );
      })}
    </div>
  );
};
