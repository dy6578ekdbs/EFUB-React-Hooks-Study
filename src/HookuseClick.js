import "./App.css";
import React, { useEffect, useState, useRef } from "react";

const HookuseClick = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 5000); 
  return (
    <div className="App">
      <div>hi</div>
      <input ref={input} placeholder="hi"/>
    </div>
  );
};

export default HookuseClick;
