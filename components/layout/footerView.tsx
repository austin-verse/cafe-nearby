import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Footer = styled.footer`
	padding-top: 4rem;
	padding-bottom: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Author = styled.p`
	text-align: center;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.2rem;
	color: ${(props) => props.theme.textColors.default};
`;

const Email = styled(Author)`
	margin-top: 1.1rem;
`;

const Links = styled.div`
	margin-top: 1.9rem;
	display: flex;
	gap: 2rem;
`;

const LinkText = styled.p`
	text-decoration: none;
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 100%;
	color: ${(props) => props.theme.textColors.default};
`;

interface PropsType {
	githubIconOnClickHandler: () => void;
}

export default function FooterView({ githubIconOnClickHandler }: PropsType) {
	return (
		<Footer>
			<Image
				src={"/images/icons/github-icon.png"}
				alt="github"
				width={30}
				height={30}
				style={{ marginBottom: "3.1rem", cursor: "pointer" }}
				onClick={githubIconOnClickHandler}
			/>
			<Author>Designed & developed by @austin-verse</Author>
			<Email>austin.hwang.dev@gmail.com</Email>
			<Links>
				<Link href="/" style={{ textDecoration: "none" }}>
					<LinkText>Home</LinkText>
				</Link>
				<Link href="/about" style={{ textDecoration: "none" }}>
					<LinkText>About</LinkText>
				</Link>
			</Links>
		</Footer>
	);
}
