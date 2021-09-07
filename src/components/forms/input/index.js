import React from "react";
import { Container, RightLabel, LeftLabel, InputField } from "./styles";

/* eslint-disable arrow-body-style */
const Input = ({ type, name, rightlabel, leftlabel, placeholder }) => {
	return (
		<Container>
			<InputField type={type} name={name} placeholder={placeholder} />
			<RightLabel>{rightlabel}</RightLabel>
			<LeftLabel>{leftlabel}</LeftLabel>
		</Container>
	);
};

export default Input;
