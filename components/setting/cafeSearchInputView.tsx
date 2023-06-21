import Image from "next/image";
import styled from "styled-components";

const InputOuter = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	position: relative;
	height: 4.2rem;
	border-radius: 1.5rem;
	background-color: #353535;
`;

const Input = styled.input`
	height: 100%;
	width: 100%;
	padding-left: 4rem;
	outline: none;
	background: none;
	font-size: 1.4rem;
	color: ${(props) => props.theme.textColors.default};
	border: none;
`;

export default function CafeSearchInputView() {
	return (
		<InputOuter>
			<Image
				src="/images/icons/search-icon.png"
				width={14}
				height={14}
				alt="search"
				style={{
					left: "1.4rem",
					position: "absolute",
				}}
			/>
			<Input placeholder="카페 이름으로 찾기" />
		</InputOuter>
	);
}
