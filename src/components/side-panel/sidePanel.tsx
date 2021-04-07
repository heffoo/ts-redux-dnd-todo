import React, { useState, FC } from "react";

import "./sidePanel.scss";

interface Props {
  modal: boolean;
  setModal: any;
}
export const SidePanel: FC<Props> = ({ modal, setModal }) => {
  return (
    <div className="side-panel">
      123<button onClick={() => setModal(!modal)}>button</button>
    </div>
  );
};
