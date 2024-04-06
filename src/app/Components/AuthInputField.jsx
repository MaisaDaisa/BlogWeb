import React from "react";

const AuthInputField = ({ type, placeholder, addClass }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`border-[1px] px-8 py-4 border-primary-green rounded-2xl ${addClass}`}
		/>
	);
};

export default AuthInputField;
