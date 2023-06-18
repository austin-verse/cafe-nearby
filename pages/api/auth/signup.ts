import { connectToDatabase } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
interface Data {}

interface UserDataType {
	id: string;
	nickName: string;
	password: string;
	passwordCheck: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== "POST") {
		return;
	}

	const test: UserDataType = {
		id: "aaaa",
		nickName: "vbbb",
		password: "vbbb",
		passwordCheck: "vb",
	};

	const data: UserDataType = req.body;
	const { id, nickName, password, passwordCheck } = data;

	// id Validation
	if (!id || id.trim().length < 6) {
		res.status(422).json({
			message: "아이디는 6자리 이상이여야 합니다.",
		});
		return;
	}

	// nickName Validation
	if (!nickName || nickName.trim().length < 2) {
		res.status(422).json({
			message: "별명은 2자리 이상이여야 합니다.",
		});
		return;
	}

	// password Validation
	if (!password || password.trim().length < 7) {
		res.status(422).json({
			message: "비밀번호는 8자리 이상이여야 합니다.",
		});
		return;
	}

	// passwordCheck Validation
	if (password !== passwordCheck) {
		res.status(422).json({
			message: "비밀번호 확인이 비밀번호와 일치하지 않습니다.",
		});
		return;
	}

	// connect to db
	const client = await connectToDatabase();
	const db = client.db();

	// connect to collection and find duplicated user
	const existingUser = await db.collection("users").findOne({ id: id });
	if (existingUser) {
		res.status(422).json({ message: "이미 해당 ID의 사용자가 존재합니다." });
		client.close();
		return;
	}

	// pw hashing 단계 ~
}
