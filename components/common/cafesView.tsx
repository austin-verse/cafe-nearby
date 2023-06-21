import styled from "styled-components";
import CafeView from "./cafeView";
import { FilteredCafeListType } from "@/types/setting";

const Cafes = styled.ul`
	margin-top: 2.6rem;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export default function CafesView({ filteredCafeList }: FilteredCafeListType) {
	return (
		<Cafes>
			{filteredCafeList &&
				filteredCafeList.map(function (a, i) {
					return <CafeView key={2} type={"add"} name={a?.name} />;
				})}
		</Cafes>
	);
}
