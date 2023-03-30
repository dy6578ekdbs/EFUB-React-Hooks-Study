import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {

    const element = useRef();

    useEffect( () => {
        if(element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            // 이벤트리스너 해제
            if(element.current) {
                element.current.removeEventListener("click", onClick);
            }
        }; 
    }, [] );

    if(typeof onClick !== "function") {
        return;
    }

    return element;
};

function HookuseClick() {

    // useRef : 컴포넌트의 어떤 부분을 선택할 수 있는 함수. document.getElementById와 비슷
    const input = useRef();
    // 강의대로 하면 undefined 에러 발생 -> current옆에 ? 붙여 유효성 검사해주기
    // 또는 useEffect안에 넣어주기
    setTimeout(() => input.current?.focus(), 5000);


    // useClick 부분 - title ref를 가진 html을 클릭하면 say hello 내뱉음
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);


    return(
        <div className="App">
            {/* htmlTag에 ref={이름} 와 같이 사용 */}
            <input ref={input} placeholder="la" />

            <h1 ref={title}>Hi Title</h1>
        </div>
    );
}

export default HookuseClick;