import { useRouter } from "next/router";
import ButtonView from "../common/buttonView";
import CafesView from "../common/cafesView";
import HeaderView from "../common/headerView";

export default function ProfileComponents() {
	const router = useRouter();
	const ButtonViewProps = {
		buttonMessage: "카페 추가하기",
		onClickHandler: () => {
			router.push("/setting");
		},
	};
	return (
		<>
			<HeaderView h1={"총 3개의 즐겨찾는 카페"} h2={"황겸이님, 반갑습니다."} />
			<CafesView />
			<ButtonView {...ButtonViewProps} />
		</>
	);
}
