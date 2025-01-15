import { Request, Response } from "express";
import { CreateUser } from "../../application/use-cases/create-user";
import { UserRepositoryAdapter } from "../repositories/user-repository";
import logger from "../logging/logger";

export class UserController {
	constructor(
		private readonly createUser: CreateUser = new CreateUser(
			new UserRepositoryAdapter()
		)
	) {}

	async create(req: Request, res: Response): Promise<Response> {
		try {
			const { name, email, password } = req.body;

			// Validate required fields
			if (!name || !email || !password) {
				return res
					.status(400)
					.json({ error: "Name, email, and password are required." });
			}

			// Call the use case
			const user = await this.createUser.execute({ name, email, password });

			// Return the response
			return res.status(201).json(user);
		} catch (error) {
			logger.error("Error creating user:", error);
			return res.status(500).json({ error: "Internal server error" });
		}
	}
}
