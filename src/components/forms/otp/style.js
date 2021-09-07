import styled from "styled-components";

/* eslint-disable import/prefer-default-export */
const Container = styled.div`
	position: relative;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 343px;
	height: 56px;
	margin: 15px;
	input {
		padding: 16px 0px;
		width: 48px;
		height: 48px;
		background: #f2f5fa;
		box-sizing: border-box;
		border-radius: 4px;
		font-size: 16px;
		line-height: 24px;
		outline: none;
		font-family: DM Sans;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		/* or 150% */

		display: flex;
		align-items: center;
		text-align: center;

		color: #000000;
		&:focus {
			border: 1px solid #227eff;
		}
	}
`;
const Label = styled.div`
	position: absolute;
	top: -13px;
	left: 5px;
	font-family: DM Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 16px;
	/* identical to box height, or 160% */

	letter-spacing: 0.01em;

	/* Text Color/Sub Text Color */

	color: #718596;
`;
export { Container, Label };
