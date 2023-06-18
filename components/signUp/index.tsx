import HeaderView from "../common/headerView";
import FormView from "./formView";
import { SignUpFormPropsType } from "./signUp";

export default function SignUpComponents() {
	const submitHandler = () => {};
	const HeaderViewProps = {
		h2: "회원가입",
		h1: "간단히 아이디와 비밀번호, 별명을 통해 회원가입하세요.",
	};
	const FormProps: SignUpFormPropsType = {
		id: { id: "id", label: "로그인 아이디" },
		nickName: { id: "nickName", label: "별명" },
		password: { id: "password", label: "비밀번호" },
		passwordCheck: { id: "passwordCheck", label: "비밀번호 확인" },
	};
	return (
		<>
			{/* 공용 컴포넌트는 바로 view import */}

			<HeaderView {...HeaderViewProps} />
			<FormView {...FormProps} />
		</>
	);
}
