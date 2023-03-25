import { useState } from "react";
import useInput from "./hooks/useInput";

const useTabs = (initialTab, allTabs) => {
  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return;
  // }

  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function App() {
  const content = [
    {
      tab: "sdfsdfdsf 1",
      content: "sdfsddsf111",
    },
    {
      tab: "sdfsdfdsf 2",
      content: "sdfsddsf222",
    },
    {
      tab: "sdfsdfdsf 3",
      content: "sdfsddsf33",
    },
  ];

  const { currentItem, changeItem } = useTabs(0, content); // index가 0이므로 content[0]을 출력

  const maxLen = (value) => value.length <= 10;
  const exam = (value) => value.includes("@");

  const name = useInput("Mr. ", exam);

  return (
    <div>
      {/* <input placeholder="Nmae" value={...name} onChange={name.onChange}/>  */}
      <input placeholder="Nmae" {...name} />

      <div>
        {content.map((s, index) => (
          <button onClick={() => changeItem(index)}>{s.tab}</button>
        ))}

        {currentItem.content}
      </div>
    </div>
  );
}

export default App;
