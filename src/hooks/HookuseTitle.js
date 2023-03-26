import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    // browser title 바꿔주는 함수
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle, [title]);

    return setTitle;
}

function HookuseTitle() {

    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);

    return(
        <div className="App">
            <h1>Hi</h1>
        </div>
    );
}

export default HookuseTitle;