import React from "react";
import styled from "styled-components";

const Input = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	align-items: flex-start;
	padding: 16px 0;
	width: 343px;
	height: 56px;
	background: #f2f5fa;
	border: 1px solid #edf2f7;
	font-family: DM Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;
	border-radius: 4px;

	input,
	select {
		background: #f2f5fa;
		padding: 0 10px;
		outline: none;
	}
	select {
		border-right: 0.5px solid #cbd6e0;
	}

	&:hover {
		/* border: 1px solid #0064f0; */
	}
`;
const PHolder = styled.div`
	position: relative;
	top: 0;
	left: 0;

	label {
		position: absolute;
		top: 0;
		left: 5px;
		font-family: DM Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		color: #6f798b;
	}
`;

const InputPhone = () => (
	<div>
		<Input>
			<select name="" id="">
				<option value="">NIG</option>
			</select>
			<PHolder>
				<input type="text" />
				<label>Enter Phone</label>
			</PHolder>
		</Input>
	</div>
);

export default InputPhone;
