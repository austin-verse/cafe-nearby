import { useRouter } from "next/router";
import NavBarView from "./navBarView";

export default function NavBar() {
	const router = useRouter();
	const props = {
		toHomeHandler: () => router.push("/"),
	};

	return <NavBarView {...props} />;
}
