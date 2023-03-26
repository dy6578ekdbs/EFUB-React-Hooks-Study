import React, { useState, useEffect } from "react";


function HookuseEffect() {

    const sayHello = () => console.log("hello");
    const [number, SetNumber] = useState(0);
    const [aNumber, SetAnumber] = useState(0);

    useEffect(() => {
        // 의존성 배열을 비워둘 경우 sayHello가 한번만 실행
        // 의존성 배열에 number을 추가할 경우 첫 번째 버튼이 눌릴 때 sayHello 실행
        sayHello();
    },[number]);

    return(
        <div className="App">
            <h1>Hi</h1>
            <button onClick={() => SetNumber(number + 1)}>{number}</button>
            <button onClick={() => SetAnumber(aNumber + 1)}>{aNumber}</button>
        </div>
    );
}

export default HookuseEffect;