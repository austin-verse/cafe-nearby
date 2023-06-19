import Image from "next/image";
import styled from "styled-components";

const TitleDescription = styled.p`
	margin-top: 2.7rem;
	width: 70%;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.2rem;
	color: ${(props) => props.theme.textColors.default};
`;

const ImageTitle = styled.h3`
	margin-top: 6.2rem;
	font-weight: 700;
	font-size: 2.2rem;
	line-height: 100%;
	color: ${(props) => props.theme.textColors.default};
`;

const ImageDescription = styled.p`
	margin-top: 2rem;
	font-weight: 500;
	font-size: 1.6rem;
	line-height: 2.4rem;
	color: ${(props) => props.theme.textColors.default};
`;

export default function HomeView() {
	return (
		<>
			<TitleDescription>
				내 주변 내가 즐겨찾는 카페가 어떤게 있는지 카페 니어바이로 빠르게
				찾아보세요.
			</TitleDescription>
			<ImageTitle>너무 많은 검색 결과!</ImageTitle>
			<Image
				src="/images/map.png"
				width={400}
				height={297}
				sizes="(max-width: 100%)"
				alt="map"
				style={{ marginTop: "2.1rem", width: "100%", height: "auto" }}
			/>
			<ImageDescription>
				주변에 내가 즐겨찾는 카페만 모아서 빠르게 보고 싶다면? 카페 니어바이에서
				시작하세요.
			</ImageDescription>
		</>
	);
}
