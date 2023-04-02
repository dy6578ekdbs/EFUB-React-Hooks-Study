import "./App.css";
import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";

const usePreventLeave = () => {
  const listener = event => {
    event.preventDafault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunload", listener);
  return {enablePrevent, disablePrevent};
}

function HookusePreventLeave() {
  const {enablePrevent, disablePrevent} = usePreventLeave()
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
}

export default HookusePreventLeave;
