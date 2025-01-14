import { Repository } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { UserRepository } from "../../domain/repositories/user.repository";
import { User } from "../../domain/entities/user.entity";
import { ObjectId } from "mongodb";

export class UserRepositoryAdapter implements UserRepository {
	private repository: Repository<User>;

	constructor() {
		this.repository = new AppDataSource().getDataSource().getRepository(User);
	}

	async create(user: Partial<User>): Promise<User> {
		const newUser = this.repository.create(user);
		return this.repository.save(newUser);
	}

	async findById(id: ObjectId): Promise<User | null> {
		return this.repository.findOneBy({ id });
	}

	async findAll(): Promise<User[]> {
		return this.repository.find();
	}
}
