import "./App.css";
import React, { useEffect, useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const HookuseInput = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default HookuseInput;
