import "./App.css";
import React, { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const HookuseFullScreen = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://dimg.donga.com/i/600/0/90/egc/CDB/WEEKLY/Article/20/11/05/16/201105160500016_1.jpg"></img>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default HookuseFullScreen;
