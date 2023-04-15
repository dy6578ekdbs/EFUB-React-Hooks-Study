import React from "react";

const useNotification = (title, options) => {
	if (!("Notification" in window)) {
		return;
	}
	const fireNotif = () => {
		if (Notification.permission !== "granted") {
			Notification.requestPermission().then((permission) => {
				if (permission === "granted") {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};
	return fireNotif;
};

const UseNotificationEx = () => {
	const triggerNotif = useNotification("Hello", {
		body: "this is notification",
	});
	return (
		<div>
			<h2>Notification</h2>
			<button onClick={triggerNotif}>click</button>
		</div>
	);
};

export default UseNotificationEx;
