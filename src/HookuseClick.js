import "./App.css";
import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick);
      } 
    };
  }, []);
  return element;
} 

function HookuseClick() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
}

export default HookuseClick;
