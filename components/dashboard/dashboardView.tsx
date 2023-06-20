import Image from "next/image";
import styled from "styled-components";

const Section = styled.section`
	margin-bottom: 2.6rem;
	* {
		color: ${(props) => props.theme.textColors.default};
	}
`;

const H3 = styled.h3`
	font-weight: 700;
	font-size: 2rem;
	line-height: 100%;
`;

const Buttons = styled.div`
	display: flex;
	gap: 1rem;
	& > button {
		border: none;
		padding: 0;
		background: none;
		outline: inherit;
		font-weight: 600;
		font-size: 1.4rem;
		line-height: 100%;
	}
`;

interface PropsType {
	cafeNumber: number;
	viewingMethod: string;
	viewingMethodOnClickHandler: (type: string) => void;
	reloadOnClickHandler: () => void;
}

export default function DashboardView(props: PropsType) {
	return (
		<Section>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "2.3rem",
				}}
			>
				<H3>총 {props.cafeNumber}개의 카페가 있습니다.</H3>
				<Image
					src="/images/icons/reload-icon.png"
					width={50}
					height={50}
					alt="reload"
					onClick={props.reloadOnClickHandler}
				/>
			</div>
			<Buttons>
				<button
					onClick={() => {
						props.viewingMethodOnClickHandler("list");
					}}
				>
					리스트로 보기
				</button>
				<button
					onClick={() => {
						props.viewingMethodOnClickHandler("map");
					}}
				>
					지도에서 보기
				</button>
			</Buttons>
		</Section>
	);
}
