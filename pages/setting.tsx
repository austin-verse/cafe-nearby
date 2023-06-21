import SettingComponents from "@/components/setting";
import { CafeListType } from "@/types/setting";
import { GetStaticProps } from "next";

export default function SettingPage({ cafeList }: CafeListType) {
	console.log(cafeList);
	return <SettingComponents cafeList={cafeList} />;
}

export const getStaticProps: GetStaticProps = () => {
	const cafeList = require("/public/data/cafes.json");
	return {
		props: {
			cafeList,
		},
	};
};
