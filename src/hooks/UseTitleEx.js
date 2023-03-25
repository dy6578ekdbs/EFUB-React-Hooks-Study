// #2 USEEFFECT : useTitle

import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
	const [title, setTitle] = useState(initialTitle);
	const updateTitle = () => {
		const htmlTitle = document.querySelector("title");
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};

const UseTitleEx = () => {
	const titleUpdater = useTitle("Loading...");
	setTimeout(() => titleUpdater("Home"), 2000);
	return (
		<div>
			<div></div>
		</div>
	);
};

export default UseTitleEx;
