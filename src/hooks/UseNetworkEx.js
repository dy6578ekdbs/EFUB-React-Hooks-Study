import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
	const [status, setStatus] = useState(navigator.onLine);
	useEffect(() => {
		const handleChange = () => {
			if (typeof onChange === "function") onChange(navigator.onLine);
			setStatus(navigator.onLine);
		};
		window.addEventListener("online", handleChange);
		window.addEventListener("offline", handleChange);
		return () => {
			window.removeEventListener("online", handleChange);
			window.removeEventListener("offline", handleChange);
		};
	}, [onChange]);
	return status;
};

const UseNetworkEx = () => {
	const handleNetworkChange = (online) => {
		console.log(online ? "We just went online" : "We are offline");
	};
	const onLine = useNetwork(handleNetworkChange);
	return (
		<div>
			<h3>{onLine ? "ONLINE" : "OFFLINE"}</h3>
		</div>
	);
};

export default UseNetworkEx;
