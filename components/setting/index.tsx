import { Cafe, CafeListType } from "@/types/setting";
import HeaderView from "../common/headerView";
import CafeCustomAddView from "./cafeCustomAddView";
import CafeSearchView from "./cafeSearchView";
import { useEffect, useState } from "react";

export default function SettingComponents({ cafeList }: CafeListType) {
	const [cafeSearchInputvalue, setCafeSearchInputvalue] = useState<string>("");
	const [filteredCafeList, setFilteredCafeList] = useState<null[] | Cafe[]>(
		cafeList
	);
	useEffect(() => {
		console.log(filteredCafeList);
	}, [filteredCafeList]);
	const cafeSearchInputOnChangeHandler = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setCafeSearchInputvalue(e.target.value);
	};
	const HeaderViewProps = {
		h1: "아래 카페 중 선택해주세요.",
		h2: "즐겨찾는 카페 추가",
	};
	const CafeSearchViewProps = {
		// inputOnChangeHandler : (e)
	};
	return (
		<>
			<HeaderView {...HeaderViewProps} />
			<CafeSearchView filteredCafeList={filteredCafeList} />
			<CafeCustomAddView />
		</>
	);
}
