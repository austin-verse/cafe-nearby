import { useState } from "react";
import HeaderView from "../common/headerView";
import { SignInFormPropsType } from "./signIn";
import FormView from "./formView";
import { signIn } from "next-auth/react";

export default function SignInComponents() {
	const [id, setId] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const idOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	};
	const passwordOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const HeaderViewProps = {
		h2: "로그인",
		h1: "로그인하여 시작해보세요.",
	};

	const onSubmitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = await signIn("credentials", {
			redirect: false,
			id: id,
			password: password,
		});
		console.log(result);
	};

	const FormProps: SignInFormPropsType = {
		id: { id: "id", label: "아이디", onChangeHandler: idOnChangeHandler },
		password: {
			type: "password",
			id: "password",
			label: "비밀번호",
			onChangeHandler: passwordOnChangeHandler,
		},
		buttonMessage: "로그인",
		onSubmitHandler: onSubmitHandler,
	};

	return (
		<>
			{/* 공용 컴포넌트는 바로 view import */}
			<HeaderView {...HeaderViewProps} />
			<FormView {...FormProps} />
		</>
	);
}
