// #1 USESTATE : useInput

import React, { useState } from "react";

const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		let willUpdate = true;
		if (typeof validator === "function") {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
};

const UseInputEx = () => {
	const maxLen = (value) => value.length <= 10 && !value.includes("@");
	const name = useInput("Mr.", maxLen);
	const email = useInput("@");
	return (
		<div>
			<input placeholder="이름" {...name} />
			<input placeholder="이메일" {...email} />
		</div>
	);
};

export default UseInputEx;
