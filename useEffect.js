import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const sayHello = () => {
    console.log("hello");
  };
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      <button
        onClick={() => {
          setAnumber(aNumber + 1);
        }}
      >
        {aNumber}
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
