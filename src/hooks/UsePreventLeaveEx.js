// #2 USEEFFECT : usePreventLeave

import React from "react";

const usePreventLeave = () => {
	const listener = (event) => {
		// 브라우저 호환
		event.preventDefault();
		event.returnValue = "";
	};
	const enablePrevent = () => window.addEventListener("beforeunload", listener);
	const disablePrevent = () =>
		window.removeEventListener("beforeunload", listener);
	// 아래 리턴은 {
	//   enablePrevent : enablePrevent,
	//   disablePrevent: disablePrevent,
	// } 을 의미, 따라서 key 값 이름으로 구조 분해 할당
	return { enablePrevent, disablePrevent };
};

const UsePreventLeaveEx = () => {
	//const { enablePrevent, disablePrevent } = usePreventLeave();
	const { enablePrevent: a, disablePrevent: b } = usePreventLeave();
	// 위와 같이 선언하면 다른 이름으로 사용 가능
	return (
		<div>
			<button onClick={a}>Protect</button>
			<button onClick={b}>Unprotect</button>
		</div>
	);
};

export default UsePreventLeaveEx;
