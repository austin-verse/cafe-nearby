import AuthInputView from "../common/authInputView";
import { SignInFormPropsType } from "./signIn";

export default function FormView(props: SignInFormPropsType) {
	return (
		<form>
			<AuthInputView {...props.id} />
			<AuthInputView {...props.password} />
		</form>
	);
}
