import { GlobalStyles } from "@/styles/GlobalStyles";
import { defaultTheme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "@/public/static/fonts/font.css";
import Layout from "@/components/layout/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={defaultTheme}>
			<SessionProvider session={pageProps.session}>
				<Layout>
					<GlobalStyles />
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</ThemeProvider>
	);
}
