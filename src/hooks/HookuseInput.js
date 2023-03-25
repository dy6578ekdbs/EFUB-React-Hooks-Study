import React, { useState } from "react";

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        console.log(event.target);
    };
    return { value, onChange };
};

function HookuseInput() {

    const name = useInput("Mr.");

    return(
        <div className="App">
            <h1>Hello</h1>
            {/* name 즉 useInput() 안에 있는 요소들을 풀어줌 */}
            <input placeholder="Name" {...name}/>
        </div>
    );
}

export default HookuseInput;