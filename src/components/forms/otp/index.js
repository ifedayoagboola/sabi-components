import React from "react";
import { Container, Label } from "./style";

/* eslint-disable arrow-body-style */
const Otp = ({ toprightlabel }) => {
	return (
		<Container>
			<Label>{toprightlabel}</Label>
			<input type="text" />
			<input type="text" />
			<input type="text" />
			<input type="text" />
			<input type="text" />
			<input type="text" />
		</Container>
	);
};

export default Otp;
