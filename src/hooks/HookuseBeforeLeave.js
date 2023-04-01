import React, { useEffect } from "react";

// 기본적으로 탭을 닫을 때 실행되는 함수
// ex. 마우스가 탭을 벗어날 때 가지말라고 붙잡기

const useBeforeLeave = (onBefore) => {
    // 마우스가 document를 벗어났을 떄 실행시킬 함수
    const handle = (event) => {
        const { clientY } = event;
        if(clientY <= 0) {
            // 마우스가 위로 벗어날 때만 console.log 띄움
            onBefore();
        }
       
    };

    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => {
            document.removeEventListener("mouseleave", handle);
        }
    }, []);

    if(typeof onBefore !== "function") {
        return;
    };
};

function HookuseBeforeLeave() {

    const begForLife = () => {
        console.log("Plz don't leave");
    };

    useBeforeLeave(begForLife);

    return(
        <div className="App">
            <h1>Hello useBeforeLeave</h1>
        </div>
    );
}

export default HookuseBeforeLeave;