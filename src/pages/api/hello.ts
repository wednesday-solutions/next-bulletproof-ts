// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

/**
 * Request handler function for the API route.
 * @param {import("next").NextApiRequest} req - The request object.
 * @param {import("next").NextApiResponse<Data>} res - The response object.
 * @returns {void}
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe" });
}
