import FormView from "./formView";
import { SignInFormPropsType } from "./signIn";

export default function Form(props: SignInFormPropsType) {
	return <FormView {...props} />;
}
