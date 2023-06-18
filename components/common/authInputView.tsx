import styled from "styled-components";

const InputOuter = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1.1rem;
`;

const Label = styled.label`
	font-weight: 700;
	font-size: 1.6rem;
	line-height: 100%;
	color: ${(props) => props.theme.textColors.default};
`;

const Input = styled.input`
	width: 100%;
	height: 4rem;
	border-radius: 1.5rem;
	padding-left: 1.5rem;
	font-size: 1.4rem;
`;
interface PropsType {
	id: string;
	label: string;
}
export default function AuthInputView({ id, label }: PropsType) {
	return (
		<InputOuter>
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} />
		</InputOuter>
	);
}
