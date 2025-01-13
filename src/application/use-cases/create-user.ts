import UserInterface from "../../domain/entities/user.interface";
import { UserRepository } from "../../domain/repositories/user.repository";

export class CreateUser {
	constructor(private userRepository: UserRepository) {}

	async execute(userData: Partial<UserInterface>): Promise<UserInterface> {
		return this.userRepository.create(userData);
	}
}
