import styled from "styled-components";

const Button = styled.button`
	margin-top: 3.7rem;
	border: none;
	width: 100%;
	height: 5.5rem;
	border-radius: 1.5rem;
	font-weight: 700;
	font-size: 2rem;
	line-height: 2rem;
	color: ${(props) => props.theme.textColors.default};
	background-color: #353535;
`;

export default function AuthButtonView() {
	return <Button>제출하기</Button>;
}
