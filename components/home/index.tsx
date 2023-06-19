import { useRouter } from "next/router";
import ButtonView from "../common/buttonView";
import HeaderView from "../common/headerView";
import HomeView from "./homeView";

export default function HomeComponents() {
	const router = useRouter();
	const HeaderProps = {
		h1: "Cafe NearBy",
		h2: "카페 니어바이",
	};
	const ButtonProps = {
		buttonMessage: "시작하기!",
		onClickHandler: () => {
			router.push("/profile");
		},
	};
	return (
		<>
			<HeaderView {...HeaderProps} />
			<HomeView />
			<ButtonView {...ButtonProps} />
		</>
	);
}
