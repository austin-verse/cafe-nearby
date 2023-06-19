import styled from "styled-components";

const Section = styled.section`
	padding-top: 7.6rem;

	> * {
		color: ${(props) => props.theme.textColors.default};
	}
`;

const SubTitle = styled.h2`
	font-weight: 700;
	font-size: 2rem;
	line-height: 100%;
`;

const Title = styled.h1`
	margin-top: 2rem;
	font-weight: 700;
	font-size: 2.6rem;
	line-height: 100%;
`;

const Author = styled.h3`
	margin-top: 2rem;
	margin-bottom: calc(2rem - 1.3rem);
	font-weight: 700;
	font-size: 2rem;
	line-height: 100%;
`;

const Links = styled.p`
	margin-top: 1.3rem;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 100%;
`;

const Description = styled.p`
	margin-top: 3.6rem;
	font-weight: 500;
	font-size: 1.2rem;
	line-height: 2rem;
`;

export default function AboutView() {
	return (
		<Section>
			<SubTitle>ABOUT</SubTitle>
			<Title>기획 / 개발 / 디자인</Title>
			<Author>By Austin Hwang</Author>
			<Links>austin.hwang.dev@gmail.com</Links>
			<Links>https://github.com/austin-verse</Links>
			<Description>
				본 서비스(웹사이트)는 개인 사이드 프로젝트입니다.
				<br />
				서버나 DB용량 등 개인적인 사정에 따라 언제든 서비스가 중지될 수
				있습니다.
			</Description>
		</Section>
	);
}
