import { ReactNode } from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import styled from "styled-components";

interface PropsType {
	children: ReactNode;
}

const Outer = styled.div`
	background-color: #242424;

	width: 100vw;
	max-width: 42rem;

	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Inner = styled.div`
	width: 90%;
	max-width: 42rem;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: #242424;
`;

export default function Layout({ children }: PropsType) {
	return (
		<Outer>
			<Inner>
				<NavBar />
				<main>{children}</main>
				<Footer />
			</Inner>
		</Outer>
	);
}
