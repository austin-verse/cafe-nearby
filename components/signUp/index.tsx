import { useState } from "react";
import HeaderView from "../common/headerView";
import FormView from "./formView";
import { SignUpFormPropsType } from "./signUp";

export default function SignUpComponents() {
	// states
	const [id, setId] = useState<string>("");
	const [nickName, setNickName] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordCheck, setPasswordCheck] = useState<string>("");
	const [isError, setIsError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const idOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setId(e.target.value);
	};
	const nickNameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNickName(e.target.value);
	};
	const passwordOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const passwordCheckOnChangeHandler = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setPasswordCheck(e.target.value);
	};

	const onSubmitHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		const response = await fetch("/api/auth/signup", {
			method: "POST",
			body: JSON.stringify({ id, nickName, password, passwordCheck }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		if (response.status !== 201) {
			setIsError(true);
			setErrorMessage(data.message);
			return;
		}
		// redirect
		setIsError(false);
		setErrorMessage("");
	};
	const HeaderViewProps = {
		h2: "회원가입",
		h1: "간단히 아이디와 비밀번호, 별명을 통해 회원가입하세요.",
	};
	const FormProps: SignUpFormPropsType = {
		id: {
			id: "id",
			label: "로그인 아이디",
			onChangeHandler: idOnChangeHandler,
		},
		nickName: {
			id: "nickName",
			label: "별명",
			onChangeHandler: nickNameOnChangeHandler,
		},
		password: {
			type: "password",
			id: "password",
			label: "비밀번호",
			onChangeHandler: passwordOnChangeHandler,
		},
		passwordCheck: {
			type: "password",
			id: "passwordCheck",
			label: "비밀번호 확인",
			onChangeHandler: passwordCheckOnChangeHandler,
		},
		onSubmitHandler: onSubmitHandler,
		isError,
		errorMessage,
	};
	return (
		<>
			{/* 공용 컴포넌트는 바로 view import */}
			<HeaderView {...HeaderViewProps} />
			<FormView {...FormProps} />
		</>
	);
}
