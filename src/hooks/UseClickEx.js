// #2 USEEFFECT : useClick

import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
	const ref = useRef();
	useEffect(() => {
		if (typeof onClick !== "function") return;
		else {
			const element = ref.current;
			if (element) {
				element.addEventListener("click", onClick);
			}
			// clean-up function
			return () => {
				if (element) {
					element.removeEventListener("click", onClick);
				}
			};
		}
	}, [onClick]);
	return typeof onClick !== "function" ? undefined : ref;
};

const UseClickEx = () => {
	const sayHello = () => console.log("Hello");
	const click = useClick(sayHello);
	return (
		<div>
			<h3 ref={click}>Hi</h3>
		</div>
	);
};

export default UseClickEx;
