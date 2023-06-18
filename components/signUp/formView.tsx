import AuthButtonView from "../common/authButtonView";
import AuthInputView from "../common/authInputView";
import { SignUpFormPropsType } from "./signUp";

export default function FormView(props: SignUpFormPropsType) {
	return (
		<form>
			<AuthInputView {...props.id} />
			<AuthInputView {...props.nickName} />
			<AuthInputView {...props.password} />
			<AuthInputView {...props.passwordCheck} />
			<AuthButtonView />
		</form>
	);
}
