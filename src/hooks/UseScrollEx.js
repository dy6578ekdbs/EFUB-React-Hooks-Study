import React, { useEffect, useState } from "react";

const useScroll = () => {
	const [state, setState] = useState({
		x: 0,
		y: 0,
	});
	const onScroll = () => {
		setState({ x: window.scrollX, y: window.scrollY });
	};
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return state;
};

const UseScrollEx = () => {
	const { y } = useScroll();
	return (
		<div style={{ height: "120vh" }}>
			<h1
				style={{
					color: y > 100 ? "red" : "blue",
					position: "fixed",
					zIndex: "1000",
				}}
			>
				Hi
			</h1>
		</div>
	);
};

export default UseScrollEx;
