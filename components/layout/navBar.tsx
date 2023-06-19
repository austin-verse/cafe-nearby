import { useRouter } from "next/router";
import NavBarView from "./navBarView";

export default function NavBar() {
	const router = useRouter();
	const props = {
		// 추가해야함
		toHomeHandler: () => router.push("/"),
	};

	return <NavBarView {...props} />;
}
