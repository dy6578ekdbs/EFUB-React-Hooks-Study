import "./App.css";
import React, { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: {value}
    } = event;
    let willUpdate = true;
    if (typeof validator === "function"){
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  }
  return { value, onChange} ;
};

function HookuseInput2() {
  const maxLen = (value) => value.length <= 10; //10자 이상이 되면 input창에 입력할 수 없다.
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>hello</h1>
      <input placeholder="Name" {...name}></input> 
      {/* spread 연산자 활용 */}
    </div>
  );
}

export default HookuseInput2;
