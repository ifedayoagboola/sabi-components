import React, { useState } from "react";
import PasswordInput from "./Password";

const Password = () => {
	const [status, setStatus] = useState(false);
	const onShowPasswordClick = () => {
		setStatus(!status);
	};
	return (
		<PasswordInput
			type={status ? "text" : "password"}
			onShowPasswordClick={onShowPasswordClick}
		/>
	);
};

export default Password;
