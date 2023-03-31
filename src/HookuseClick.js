import "./App.css";
import React, { useEffect, useRef, useState } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};
const HookuseClick = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <div>Hi</div>
      <input ref={title} placeholder="la"></input>
    </div>
  );
};

export default HookuseClick;
