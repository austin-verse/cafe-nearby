export interface SignInFormPropsType {
	id: {
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
	buttonMessage: string;
	onSubmitHandler: (e: React.FormEvent) => void;
}
