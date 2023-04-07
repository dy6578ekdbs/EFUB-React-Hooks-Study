import React, { useState, useEffect, StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import {useFullScreen} from "./useFullScreen";

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://i.pinimg.com/originals/ca/6b/1f/ca6b1f0348a8b3a51c5bbfee5dc660ae.png" />
        <button onClick={exitFull}>Exit FullScreen</button>
      </div>
      <button onClick={triggerFull}>Make FullScreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);