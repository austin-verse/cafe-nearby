import Image from "next/image";
import CafesView from "../common/cafesView";
import styled from "styled-components";
import CafeSearchInputView from "./cafeSearchInputView";
import { Cafe, CafeListType, FilteredCafeListType } from "@/types/setting";

export default function CafeSearchView({
	filteredCafeList,
}: FilteredCafeListType) {
	return (
		<section
			style={{
				marginTop: "2.6rem",
			}}
		>
			<CafeSearchInputView />
			<CafesView filteredCafeList={filteredCafeList} />
		</section>
	);
}
