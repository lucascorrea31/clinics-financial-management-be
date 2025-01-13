import { CreateUser } from "./create-user";
import { UserRepository } from "../../domain/repositories/user.repository";

const mockUserRepository: UserRepository = {
	create: jest.fn().mockResolvedValue({
		id: "1",
		name: "John Doe",
		email: "john@example.com",
		password: "hashed",
	}),
};

describe("CreateUser", () => {
	it("should create a new user", async () => {
		const createUser = new CreateUser(mockUserRepository);
		const user = await createUser.execute({
			name: "John Doe",
			email: "john@example.com",
			password: "123456",
		});

		expect(user).toHaveProperty("id");
		expect(user.name).toBe("John Doe");
	});
});
