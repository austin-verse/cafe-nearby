import Image from "next/image";
import styled from "styled-components";

const Cafe = styled.li`
	padding-left: 2.7rem;
	padding-right: 1.8rem;
	height: 5.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 1.5rem;
	background-color: #353535;
	& > p {
		font-weight: 700;
		font-size: 1.8rem;
		line-height: 100%;
		color: ${(props) => props.theme.textColors.default};
	}
`;

interface PropsType {
	type: string;
	name: string;
	// removeButtonHandler: () => void;
}

export default function CafeView({
	type,
	name,
}: // removeButtonHandler,
PropsType) {
	return (
		<Cafe>
			<p>{name}</p>
			{type == "remove" ? (
				<Image
					src="/images/icons/remove-icon.png"
					alt="remove"
					width={20}
					height={20}
				/>
			) : (
				<Image
					src="/images/icons/add-icon.png"
					alt="add"
					width={20}
					height={20}
				/>
			)}
		</Cafe>
	);
}
