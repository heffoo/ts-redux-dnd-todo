import React, { FC } from "react";

import "./modal.scss";

interface Props {
  setModal: any;
}

export const Modal: FC<Props> = ({ setModal }) => {
  return (
    <div className="modal">
      <p>321312312 </p>
      <button onClick={() => setModal(false)}>x </button>
    </div>
  );
};
