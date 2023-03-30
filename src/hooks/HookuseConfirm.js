import React from "react";

// 사용자가 어떤 작업을 하기 전에 확인하는 함수
const useConfirm = (message = "", onConfirm, onCancel) => {

    const confirmAction = () => {
        // confirm function이 browser에 message를 가지고 있다면
        // onConfirm function 부르기
        if(window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };

    if(!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if(onCancel && typeof onCancel!== "function") {
        return;
    }

    return confirmAction;
    
};

function HookuseConfirm() {

    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
    return(
        <div className="App">
            {/* 버튼 클릭 시 confirmDelete (즉, useConfirm) 실행 */}
            <button onClick={confirmDelete}>Delete the world!</button>
        </div>
    );
}

export default HookuseConfirm;