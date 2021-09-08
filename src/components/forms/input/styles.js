import styled from "styled-components";

const Container = styled.div`
	position: relative;
	top: 0;
	left: 0;
	width: 343px;
	height: 56px;
	margin: 15px;

	/* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start; */
`;
const RightLabel = styled.div`
	position: absolute;
	top: 57px;
	right: 10px;
	font-size: 10px;
	line-height: 16px;
	text-align: right;
	letter-spacing: 0.01em;
	color: #718596;
`;
const LeftLabel = styled(RightLabel)`
	left: 10px;
	text-align: left;
`;
const RightIcon = styled.div`
	left: 10px;
	text-align: left;
`;
const LeftIcon = styled.div`
	left: 10px;
	text-align: left;
`;
const RightSelect = styled.div`
	left: 10px;
	text-align: left;
`;
const LeftSelect = styled.div`
	left: 10px;
	text-align: left;
`;
const InputField = styled.input`
	outline: none;
	font-family: DM Sans;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	color: #071827;
	padding: 18px 8px 17px;
	width: 343px;
	height: 56px;
	background: #f2f5fa;
	border: 1px solid #a7b2bd;
	box-sizing: border-box;
	border-radius: 4px;

	&::placeholder {
		font-family: DM Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 21px;
		color: #6f798b;
		padding-left: 5px;
		position: absolute;
	}
	&:focus {
		border: 2px solid #227eff;
	}
	&:focus::placeholder {
		left: 2px;
		top: 2px;
		font-family: DM Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 10px;
		line-height: 16px;
		letter-spacing: 0.01em;
		color: #227eff;
	}
`;

export {
	Container,
	RightLabel,
	LeftLabel,
	InputField,
	RightIcon,
	LeftIcon,
	RightSelect,
	LeftSelect,
};
