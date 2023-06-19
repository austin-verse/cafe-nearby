import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export default function ProfilePage() {
	return <div>aa</div>;
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
