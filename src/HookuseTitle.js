import "./App.css";
import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTItle = document.querySelector("title");
    htmlTItle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const HookuseTitle = () => {
  const titleUpdater = useTitle("Loading ...");
  setTimeout(()=> titleUpdater("Home"), 5000) //5초
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
};

export default HookuseTitle;
