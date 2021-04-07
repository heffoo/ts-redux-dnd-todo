import React from "react";
import ReactDOM from "react-dom";

// const appRoot = document.getElementById("root");


class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.modalRoot = document.getElementById("modals");
  }

  componentDidMount() {
   
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default ModalPortal;