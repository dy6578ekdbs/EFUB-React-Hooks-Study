// #2 USEEFFECT : useBeforeLeave

import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
	useEffect(() => {
		if (typeof onBefore !== "function") return;
		const handle = (event) => {
			const { clientY } = event;
			if (clientY <= 0) onBefore();
		};
		document.addEventListener("mouseleave", handle);
		return () => document.removeEventListener("mouseleave", handle);
	}, [onBefore]);
};

const UseBeforeLeaveEx = () => {
	const show = () => console.log("Please don't leave");
	useBeforeLeave(show);
	return (
		<div>
			<h3>when leave page</h3>
		</div>
	);
};

export default UseBeforeLeaveEx;
