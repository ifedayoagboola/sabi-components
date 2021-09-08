import React from "react";
import {
	Container,
	RightLabel,
	LeftLabel,
	InputField,
	// RightIcon,
	// LeftIcon,
	// RightSelect,
	// LeftSelect,
} from "./styles";

/* eslint-disable arrow-body-style */
const Input = ({
	type,
	name,
	rightlabel,
	leftlabel,
	placeholder,
	// iconright,
	// iconleft,
	// selectright,
	// selectleft,
}) => {
	return (
		<Container>
			<InputField type={type} name={name} placeholder={placeholder} />
			{/* <RightIcon>{righticon}</RightIcon>
			<LeftIcon>{lefticon}</LeftIcon>
			<RightSelect>{rightselect}</RightSelect>
			<LeftSelect>{leftselect}</LeftSelect> */}
			<RightLabel>{rightlabel}</RightLabel>
			<LeftLabel>{leftlabel}</LeftLabel>
		</Container>
	);
};

export default Input;
