import { MongoClient } from "mongodb";

export async function connectToDatabase() {
	const client = await MongoClient.connect(process.env.DB_URL!);
	console.log("DB CONNECTED");
	return client;
}
