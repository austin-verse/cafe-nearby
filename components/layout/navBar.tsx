import { useRouter } from "next/router";
import NavBarView from "./navBarView";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function NavBar() {
	const router = useRouter();
	const { data: session } = useSession();
	const [isSessionValid, setIsSessionValid] = useState<boolean>(false);
	useEffect(() => {
		if (!session) {
			setIsSessionValid(false);
		} else {
			setIsSessionValid(true);
		}
	}, [session]);
	const props = {
		// 추가해야함
		isSessionValid,
		toHomeHandler: () => {
			router.push("/");
		},
		toDashboardHandler: () => {
			router.push("/dashboard");
		},
		logInOnClickHandler: () => {
			router.push("/signin");
		},
		logOutOnClickHandler: () => {
			signOut();
		},
	};

	return <NavBarView {...props} />;
}
