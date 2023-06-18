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
	max-width: 46rem;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Inner = styled.div`
	width: 90%;
	height: auto;
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
