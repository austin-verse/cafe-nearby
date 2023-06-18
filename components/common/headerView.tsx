import styled from "styled-components";

const Header = styled.header`
	padding-top: 7.6rem;
	& > * {
		color: ${(props) => props.theme.textColors.default};
	}
`;

const H2 = styled.h2`
	font-weight: 700;
	font-size: 2rem;
	line-height: 100%;
`;

const H1 = styled.h1`
	margin-top: 2rem;
	font-weight: 700;
	font-size: 3.2rem;
	line-height: 4.4rem;
`;

interface PropsType {
	h1: string;
	h2: string;
}

export default function HeaderView({ h1, h2 }: PropsType) {
	return (
		<Header>
			<H2>{h2}</H2>
			<H1>{h1}</H1>
		</Header>
	);
}
