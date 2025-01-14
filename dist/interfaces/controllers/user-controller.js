"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const create_user_1 = require("../../application/use-cases/create-user");
const user_repository_1 = require("../../infrastructure/repositories/user-repository");
const logger_1 = __importDefault(require("../../infrastructure/logging/logger"));
class UserController {
    constructor() {
        const userRepository = new user_repository_1.UserRepositoryAdapter();
        this.createUser = new create_user_1.CreateUser(userRepository);
    }
    async create(req, res) {
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
        }
        catch (error) {
            logger_1.default.error("Error creating user:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}
exports.UserController = UserController;
