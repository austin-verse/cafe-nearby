import styled from "styled-components";
import ButtonView from "../common/buttonView";
import AuthInputView from "../common/authInputView";
import { SignUpFormPropsType } from "./signUp";
const ErrorMessage = styled.p`
	text-align: center;
	margin-top: 3rem;
	font-size: 1.6rem;
	font-weight: 600;
	/* color: ${(props) => props.theme.textColors.default}; */
	color: #ff4747;
`;
export default function FormView(props: SignUpFormPropsType) {
	return (
		<form onSubmit={props.onSubmitHandler}>
			<AuthInputView {...props.id} />
			<AuthInputView {...props.nickName} />
			<AuthInputView {...props.password} />
			<AuthInputView {...props.passwordCheck} />
			{props.isError ? <ErrorMessage>{props.errorMessage}</ErrorMessage> : null}
			<ButtonView buttonMessage={props.buttonMessage} />
		</form>
	);
}
