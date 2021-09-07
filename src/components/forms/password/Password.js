import React from "react";
import Input from "../input";
import { ShowPasswordButton, Wrapper } from "./style";

/* eslint-disable arrow-body-style */
const PasswordInput = ({ type, onShowPasswordClick }) => {
	return (
		<Wrapper>
			<Input type={type} name="password" placeholder="password" />
			<ShowPasswordButton onClick={onShowPasswordClick}>
				{type === "password" ? "Show" : "Hide"}
			</ShowPasswordButton>
		</Wrapper>
	);
};

export default PasswordInput;
