import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import getServerSession from "next-auth/next";
import { getSession } from "next-auth/react";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { useEffect } from "react";

export default function ProfilePage({ session }: any) {
	useEffect(() => {
		console.log(session);
	}, [session]);
	return <div>aa</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession({ req: context.req });
	console.log(session);
	if (!session) {
		return {
			redirect: {
				destination: "/signin",
				permanent: false,
			},
			props: { session },
		};
	}
	return {
		props: { session },
	};
};
