import { connectToDatabase } from "@/lib/db";
import { verifyPassword } from "@/lib/password";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				const { id, password } = credentials;
				const client = await connectToDatabase();
				const userCollection = client.db("cafe_nearby").collection("users");
				const user = await userCollection.findOne({
					user_id: id,
				});
				// if no user found
				if (!user) {
					client.close();
					console.log("Err");
					throw new Error("No user found");
				}
				const isValid = await verifyPassword(password, user.hashedPassword);
				if (!isValid) {
					client.close();
					console.log("Err");
					throw new Error("Password incorrect.");
				}

				// create JWT with id and nickName
				return {
					user_id: user.user_id,
					nickName: user.nickName,
				};
			},
		}),
	],
});
