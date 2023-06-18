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
	toHomeHandler: () => void;
}

export default function NavBarView({ toHomeHandler }: PropsType) {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container fluid>
				<Navbar.Brand onClick={toHomeHandler}>
					<Title>Cafe Nearby</Title>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" navbarScroll>
						<Nav.Link href="/">
							<ItemText>Home</ItemText>
						</Nav.Link>
						<Nav.Link href="/profile">
							<ItemText>Profile</ItemText>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
