import HomeComponents from "@/components/home";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function HomePage() {
	return <HomeComponents />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession({ req: context.req });
	if (session) {
		return {
			redirect: {
				destination: "/dashboard",
				permanent: false,
			},
			props: {},
		};
	} else {
		return {
			props: {},
		};
	}
};
