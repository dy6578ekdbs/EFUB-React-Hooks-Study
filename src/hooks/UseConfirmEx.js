// #2 USEEFFECT : useConfirm

import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
	if (!onConfirm || typeof onConfirm !== "function") return;
	if (onCancel && typeof onCancel !== "function") return;
	const confirmAction = () => {
		if (window.confirm(message)) {
			onConfirm();
		} else {
			try {
				onCancel();
			} catch (error) {
				return;
			}
		}
	};
	return confirmAction;
};

const UseConfirmEx = () => {
	const goDelete = () => console.log("Deleting...");
	const abort = () => console.log("Aborted");
	const confirmDelete = useConfirm("Are you sure?", goDelete, abort);
	return (
		<div>
			<button onClick={confirmDelete}>Delete</button>
		</div>
	);
};

export default UseConfirmEx;
