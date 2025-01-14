"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_user_1 = require("./create-user");
const mockUserRepository = {
    create: jest.fn().mockResolvedValue({
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        password: "hashed",
    }),
};
describe("CreateUser", () => {
    it("should create a new user", async () => {
        const createUser = new create_user_1.CreateUser(mockUserRepository);
        const user = await createUser.execute({
            name: "John Doe",
            email: "john@example.com",
            password: "123456",
        });
        expect(user).toHaveProperty("id");
        expect(user.name).toBe("John Doe");
    });
});
