"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userData) {
        return this.userRepository.create(userData);
    }
}
exports.CreateUser = CreateUser;
