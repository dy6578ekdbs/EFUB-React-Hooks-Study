import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
	const element = useRef();
	useEffect(() => {
		if (typeof duration !== "number" || typeof delay !== "number") return;
		if (element.current) {
			const { current } = element;
			current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
			current.style.opacity = 1;
		}
	}, [duration, delay]);
	return { ref: element, style: { opacity: 0 } };
};

const UseFadeInEx = () => {
	const fadeInH1 = useFadeIn(3, 1);
	return (
		<div>
			<h1 {...fadeInH1}>FadeIn</h1>
		</div>
	);
};

export default UseFadeInEx;
