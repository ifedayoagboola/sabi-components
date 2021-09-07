import React from "react";
import StyledButton from "./style";

const Button = (type, size, text) => {
	return (
		<StyledButton type={type} size={size}>
			{text}
		</StyledButton>
	);
};

export default Button;
