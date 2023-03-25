import React, { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
];

const useTabs = (initialTab, allTabs) => {
    
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    // 만약 allTabs가 false이거나 Array 형태가 아니라면 그냥 return 시키고 끝냄
    // Array.isArray() : 배열인지 확인하는 것
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        // 선택된 탭의 인덱스를 return
        currentItem : allTabs[currentIndex],
        // 현재 클릭한 인덱스가 바뀌었을 때
        changeItem : setCurrentIndex
    }
};

function HookuseTab() {
    
    const {currentItem, changeItem} = useTabs(0, content);

    return(
        <div className="App">
            {content.map((section, index) => (
                <button onClick={() => {changeItem(index)}}>{section.tab}</button>
            ))}
            <div>{currentItem.content}</div>
            
        </div>
    );
}

export default HookuseTab;