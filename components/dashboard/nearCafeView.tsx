import Image from "next/image";
import styled from "styled-components";

const Section = styled.section`
	margin-bottom: 1.2rem;
	background-color: #353535;
	padding-right: 2rem;
	padding-left: 2rem;
	height: 9rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 1.5rem;
`;

const Button = styled.button`
	border: none;
	padding: 0;
	background: none;
	outline: inherit;
`;

const CafeName = styled.h2`
	font-weight: 700;
	font-size: 2rem;
	line-height: 100%;
	color: ${(props) => props.theme.textColors.default};
`;

const Distance = styled.p`
	font-weight: 600;
	font-size: 1.6rem;
	line-height: 100%;
	color: #d6d6d6;
`;

export default function NearCafeView() {
	return (
		<Section>
			<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
				<CafeName>스타벅스 대연DT점</CafeName>
				<Distance>221m</Distance>
			</div>
			<Button>
				<Image
					src="/images/icons/map-button-icon.png"
					width={38}
					height={38}
					alt="map-button"
				/>
			</Button>
		</Section>
	);
}
