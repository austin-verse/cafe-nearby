import AuthInputView from "../common/authInputView";
import ButtonView from "../common/buttonView";
import { SignInFormPropsType } from "./signIn";

export default function FormView(props: SignInFormPropsType) {
	return (
		<form onSubmit={props.onSubmitHandler}>
			<AuthInputView {...props.id} />
			<AuthInputView {...props.password} />
			<ButtonView buttonMessage={props.buttonMessage} />
		</form>
	);
}
