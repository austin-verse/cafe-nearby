import styled from "styled-components";

export const Button = styled.button`
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

interface PropsType {
	onClickHandler?: () => void;
	buttonMessage: string;
}

export default function ButtonView(props: PropsType) {
	return <Button onClick={props.onClickHandler}>{props.buttonMessage}</Button>;
}
