import HeaderView from "../common/headerView";
import Form from "./form";
import { SignInFormPropsType } from "./signIn";

export default function SignInComponents() {
	const HeaderViewProps = {
		h2: "로그인",
		h1: "로그인하여 시작해보세요.",
	};

	const FormProps: SignInFormPropsType = {
		id: { id: "id", label: "아이디" },
		password: { id: "password", label: "비밀번호" },
	};

	return (
		<>
			{/* 공용 컴포넌트는 바로 view import */}
			<HeaderView {...HeaderViewProps} />
			<Form {...FormProps} />
		</>
	);
}
