import { useRouter } from "next/router";
import FooterView from "./footerView";

export default function Footer() {
	const props = {
		githubIconOnClickHandler: () => {
			window.open("https://github.com/austin-verse", "_blank");
		},
	};
	return <FooterView {...props} />;
}
