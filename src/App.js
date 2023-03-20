import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { ReactDOM } from "react";

function App() {
  const [item, setItem] = useState(1);
  const increateItem = () => setItem(item + 1);
  const decreatItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>hello {item}</h1>
      <button onClick={increateItem}>Increment</button>
      <button onClick={decreatItem}>Decrement</button>
    </div>
  );
}

export default App;
