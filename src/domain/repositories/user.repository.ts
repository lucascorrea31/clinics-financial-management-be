import { User } from "../entities/user.entity";

export interface UserRepository {
	create(user: Partial<User>): Promise<User>;
}
