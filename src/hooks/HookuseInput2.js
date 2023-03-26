import React, { useState } from "react";

// HookuseInput에서 유효성을 검증하는 기능 추가
const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target : { value }
        } = event;

        let willUpdate = true;

        if(typeof validator === "function") {
            // value의 유효성 검사한 결과를 willUpdate에 저장
            willUpdate = validator(value);  
        }

        if(willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

function HookuseInput2() {
    // value 길이가 10자 이하일 경우 true
    // const maxLen = value => value.length <= 10;

    // @를 포함하지 않으면 true
    const maxLen = value => !value.includes("@");

    const name = useInput("Mr.", maxLen);

    return(
        <div className="App">
            <h1>Hello</h1>
            {/* name 즉 useInput() 안에 있는 요소들을 풀어줌 */}
            <input placeholder="Name" {...name}/>
        </div>
    );
}

export default HookuseInput2;