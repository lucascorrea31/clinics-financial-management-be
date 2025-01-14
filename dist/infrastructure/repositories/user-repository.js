"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryAdapter = void 0;
const data_source_1 = require("../database/data-source");
const user_entity_1 = require("../../domain/entities/user.entity");
class UserRepositoryAdapter {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
    }
    async create(user) {
        const newUser = this.repository.create(user);
        return this.repository.save(newUser);
    }
    async findById(id) {
        return this.repository.findOneBy({ id });
    }
    async findAll() {
        return this.repository.find();
    }
}
exports.UserRepositoryAdapter = UserRepositoryAdapter;
