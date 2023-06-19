import React from "react";

export interface SignUpFormPropsType {
	id: {
		id: string;
		label: string;
		onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	};
	nickName: {
		id: string;
		label: string;
		onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	};
	password: {
		type: string;
		id: string;
		label: string;
		onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	};
	passwordCheck: {
		type: string;
		id: string;
		label: string;
		onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	};
	onSubmitHandler: (e: React.FormEvent) => void;
	isError: boolean;
	errorMessage: string;
}
