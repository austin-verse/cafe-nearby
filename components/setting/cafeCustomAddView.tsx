import styled from "styled-components";
import CafeSearchInputView from "./cafeSearchInputView";
import CafesView from "../common/cafesView";

const Section = styled.section`
	margin-top: 5.3rem;
	> * {
		color: ${(props) => props.theme.textColors.default};
	}
	> h3 {
		font-weight: 700;
		font-size: 2rem;
		line-height: 100%;
	}
	> h4 {
		margin-top: 1.4rem;
		margin-bottom: 2.3rem;
		font-weight: 600;
		font-size: 1.4rem;
		line-height: 100%;
	}
`;

export default function CafeCustomAddView() {
	return (
		<Section>
			<h3>검색 결과가 없나요?</h3>
			<h4>수동으로도 추가할 수 있어요.</h4>
			<CafeSearchInputView />
			<CafesView />
		</Section>
	);
}
