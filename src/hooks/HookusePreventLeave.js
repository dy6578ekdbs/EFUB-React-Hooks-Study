import React, { useState, useEffect } from "react";

// 사용자가 window창을 닫을 때 아직 저장하지 않았다고 알려주는 함수
const usePreventLeave = () => {

    // ex. API에 뭔가를 보냈을 때 사람들이 닫지 않길 바란다면 
    // 정보를 보호할 수 있게 이 함수를 활성화 시킴
    // 그런데 API가 응답을 해서 괜찮다면 이 함수를 활성화 x
    
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    }
    
    const enablePrevent = () => {
        // beforeunload는 window가 닫히기 전에 function이 실행됨
        window.addEventListener("beforeunload", listener);
    };
    const disablePrevent = () => {
        window.removeEventListener("beforeunload", listener);
    };

    return {enablePrevent, disablePrevent};
};

function HookusePreventLeave() {

    const {enablePrevent, disablePrevent} = usePreventLeave();
    return(
        <div className="App">
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
}

export default HookusePreventLeave;