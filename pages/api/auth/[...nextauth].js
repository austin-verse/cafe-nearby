import { connectToDatabase } from "@/lib/db";
import { verifyPassword } from "@/lib/password";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				const { user_id, password } = credentials;
				const client = await connectToDatabase();
				const userCollection = client.db("cafe_nearby").collection("users");
				const user = await userCollection.findOne({
					user_id,
				});
				// if no user found
				if (!user) {
					client.close();
					throw new Error("No user found");
				}
				console.log("pass1");
				const isValid = await verifyPassword(password, user.hashedPassword);
				if (!isValid) {
					client.close();
					throw new Error("Password incorrect.");
				}

				// create JWT with id and nickName
				const returnedObject = {
					user_id: user.user_id,
					nickName: user.nickName,
					age: "20",
				};
				return returnedObject;
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			// user = authorize에서 return해주는 값
			session.user = token.user;
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return token;
		},
	},
};

export default NextAuth(authOptions);
