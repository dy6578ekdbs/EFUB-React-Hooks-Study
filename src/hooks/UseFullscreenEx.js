import React, { useRef } from "react";

const useFullscreen = (callback) => {
	const element = useRef();
	const runCb = (isFull) => {
		if (typeof callback === "function") callback(isFull);
	};
	const triggerFull = () => {
		if (element.current) {
			if (element.current.requestFullscreen) {
				element.current.requestFullscreen();
			} else if (element.current.mozRequestFullScreen) {
				element.current.mozRequestFullScreen();
			} else if (element.current.webkitRequestFullscreen) {
				element.current.webkitRequestFullscreen();
			} else if (element.current.msRequestFullscreen) {
				element.current.msRequestFullscreen();
			}
			runCb(true);
		}
	};
	const exitFull = () => {
		document.exitFullscreen();
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
		runCb(false);
	};
	return { element, triggerFull, exitFull };
};

const UseFullscreenEx = () => {
	const onFullS = (isFull) => {
		console.log(isFull ? "We are full" : "We are small");
	};
	const { element, triggerFull, exitFull } = useFullscreen(onFullS);
	return (
		<div>
			<div ref={element}>
				<div>
					<button onClick={exitFull}>Exit fullscreen</button>
				</div>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGNIYNIw31GnVQcW_7bZRigOd-Ws93ukbRw&usqp=CAU"
					alt="img"
				/>
			</div>
			<button onClick={triggerFull}>Make fullscreen</button>
		</div>
	);
};

export default UseFullscreenEx;
