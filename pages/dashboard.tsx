import DashboardComponents from "@/components/dashboard";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function DashboardPage() {
	return <DashboardComponents />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession({ req: context.req });
	if (!session) {
		return {
			redirect: {
				destination: "/signin",
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
