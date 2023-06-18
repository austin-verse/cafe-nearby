import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		textColors: {
			default: string;
			unChecked: string;
		};
		buttonColors: {
			default: string;
		};
		backgroundColors: {
			default: string;
		};
	}
}
