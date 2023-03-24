import "./App.css";
import React, { useEffect, useState } from "react";

function HookuseEffect() {
  const sayHello = () => console.log("Hello");
  const [number, SetNumber] = useState(0);
  const [aNumber, SetAnumber] = useState(0);
  useEffect(() => {
    sayHello();
  }, [number]);

  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={() => SetNumber(number + 1)}>{number}</button>
      <button onClick={() => SetAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

export default HookuseEffect;
