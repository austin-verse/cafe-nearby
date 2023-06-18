import { NextApiRequest, NextApiResponse } from "next";
interface Data {}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== "POST") {
		return;
	}
}
