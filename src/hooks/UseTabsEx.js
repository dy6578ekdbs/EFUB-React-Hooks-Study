// #1 USESTATE : useTabs

import React, { useState } from "react";

const content = [
	{
		tab: "섹션 1",
		content: "섹션 1의 내용입니다.",
	},
	{
		tab: "섹션 2",
		content: "섹션 2의 내용입니다.",
	},
];

const useTabs = (initialTab, allTabs) => {
	const [currentIndex, setCurrentIndex] = useState(initialTab);
	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex,
	};
};

const UseTabsEx = () => {
	const { currentItem, changeItem } = useTabs(0, content);
	return (
		<div>
			{content.map((section, index) => (
				<button onClick={() => changeItem(index)}>{section.tab}</button>
			))}
			<div>{currentItem.content}</div>
		</div>
	);
};

export default UseTabsEx;
