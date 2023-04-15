import './App.css'
import React, { useState, useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import { elementType } from "prop-types";

const useFullScreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  return {element, triggerFull};
};

function HookuseFullScreen() {
  const { element, triggerFull } = useFullScreen();
  return (
    <div className="App" style={{height:"1000vh"}}>
      <img ref={element} src="https://media.istockphoto.com/id/1403669585/ko/%EC%82%AC%EC%A7%84/%EA%B0%80%EB%B2%BC%EC%9A%B4-%EB%B0%94%EB%8B%A5%EC%97%90-%EB%88%84%EC%9B%8C%EC%9E%88%EB%8A%94-%EA%B3%A8%EB%93%A0-%EB%A6%AC%ED%8A%B8%EB%A6%AC%EB%B2%84.jpg?b=1&s=170667a&w=0&k=20&c=PVOpcizDR887IEWZMt6BSLTOxiAwTiI_Qyl9QbYU50g="></img>
      <button onClick={triggerFull}>Make full screen</button>
    </div>
  )
}

export default HookuseFullScreen
