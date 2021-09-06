export const PryBtnSm = styled.button`
	height: 32px;
	width: 104px;
	outline: none;
	color: #fff;
	font-family: DM Sans;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px;
	letter-spacing: 0em;
	text-align: center;
	border-radius: 4px;
	background: ${({ disabled }) => (disabled ? "#A6CBFF" : "#227eff")};
	button:hover {
		background: #0064f0;
	}
	button:focus {
		background: #0350bb;
	}
`;
export const PryBtnMd = styled(PryBtnSm)`
	height: 48px;
	width: 123px;
	font-size: 16px;
	line-height: 24px;
`;

export const PryBtnBg = styled(PryBtnMd)`
	height: 56px;
	width: 342px;
`;
export const PryBtnLg = styled(PryBtnSm)`
	height: 72px;
	width: 342px;
	font-weight: 700;
	line-height: 30px;
	font-size: 20px;
`;
export const PryIconBtnSm = styled.button`
	height: 32px;
	width: 128px;
	outline: none;
	background: ${({ disabled }) => (disabled ? "#A6CBFF" : "#227eff")};
	color: #fff;
	font-family: DM Sans;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px;
	letter-spacing: 0em;
	text-align: center;
	border-radius: 4px;
	&:hover {
		background: #0064f0;
	}
	&:focus {
		background: #0350bb;
	}
`;
export const PryIconBtnMd = styled(PryIconBtnSm)`
	height: 48px;
	width: 155px;
	font-size: 16px;
	line-height: 24px;
`;
export const PryIconBtnBg = styled(PryIconBtnSm)`
	height: 56px;
	width: 342px;
	font-size: 16px;
	line-height: 24px;
`;
export const SecBtnSm = styled.button`
	height: 32px;
	width: 104px;
	border-radius: 4px;
	padding: 7px, 24px;
	outline: none;
	border: ${({ disabled }) => (disabled ? "1px solid #A6CBFF" : "1px solid #227EFF")};
	background: #fff;
	color: ${({ disabled }) => (disabled ? "#A6CBFF" : "#227EFF")};
	font-family: DM Sans;
	font-size: 12px;
	font-style: normal;
	font-weight: 500;
	line-height: 18px;
	letter-spacing: 0em;
	text-align: center;
	&:hover {
		border: 1px solid #0064f0;
		color: #0064f0;
	}
	&:focus {
		border: 1px solid #0350bb;
		color: #0350bb;
	}
`;
export const SecBtnMd = styled(SecBtnSm)`
	height: 48px;
	width: 123px;
	padding: 12px, 24px;
	font-size: 16px;
	line-height: 24px;
`;
export const SecBtnBg = styled(SecBtnSm)`
	height: 56px;
	width: 342px;
	padding: 16px, 134px;
	font-size: 16px;
	line-height: 24px;
`;
