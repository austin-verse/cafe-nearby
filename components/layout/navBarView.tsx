import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
const Title = styled.p`
	padding: 1.6rem 0;
	font-weight: 700;
	font-size: 1.6rem;
	line-height: 100%;
	color: ${(props) => props.theme.textColors.default};
`;

const ItemText = styled.p`
	font-size: 1.6rem;
	padding: 1.2rem;
	color: ${(props) => props.theme.textColors.default};
	&:hover {
		background-color: #333333;
	}
`;

interface PropsType {
	isSessionValid: boolean;
	toHomeHandler: () => void;
	toDashboardHandler: () => void;
	logInOnClickHandler: () => void;
	logOutOnClickHandler: () => void;
}

export default function NavBarView({
	isSessionValid,
	toHomeHandler,
	toDashboardHandler,
	logInOnClickHandler,
	logOutOnClickHandler,
}: PropsType) {
	return (
		<Navbar
			collapseOnSelect
			expand=""
			bg="dark"
			variant="dark"
			style={{ maxWidth: 989 }}
		>
			<Container fluid style={{ backgroundColor: "#242424" }}>
				<Navbar.Brand onClick={toHomeHandler} style={{ cursor: "pointer" }}>
					<Title>Cafe Nearby</Title>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" navbarScroll>
						<Nav.Link href="/">
							<ItemText>홈</ItemText>
						</Nav.Link>
						<Nav.Link href="/dashboard">
							<ItemText>내 주변 카페</ItemText>
						</Nav.Link>
						<Nav.Link href="/profile">
							<ItemText>프로필</ItemText>
						</Nav.Link>
						{isSessionValid ? (
							<ItemText onClick={logOutOnClickHandler}>로그아웃</ItemText>
						) : (
							<ItemText onClick={logInOnClickHandler}>로그인</ItemText>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
