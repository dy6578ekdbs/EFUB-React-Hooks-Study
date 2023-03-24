import "./App.css";
import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    console.log(event.target);
  }
  return { value, onChange} ;
};

function HookuseInput() {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name}></input> 
      {/* spread 연산자 활용 */}
    </div>
  );
}

export default HookuseInput;
