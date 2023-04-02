import "./App.css";
import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useConfirm = (message="", onConfirm, onCancel) => {
  if( !onConfirm || typeof onConfirm != "function"){
    return;
  }
  if ( !onCancel || typeof onCancel != "function"){
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  }
  return confirmAction;
}

function HookuseConfirm() {
  const deleteWorld = () => console.log("Deleteing the world...");
  const abort = () => {

  }
  const confirmDelete = useConfirm("Are you sure?", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default HookuseConfirm;
