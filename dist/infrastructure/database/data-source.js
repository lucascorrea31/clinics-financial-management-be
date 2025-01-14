"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const logger_1 = __importDefault(require("../logging/logger"));
class AppDataSource {
    constructor() {
        this.appDataSource = new typeorm_1.DataSource({
            type: "mongodb",
            url: process.env.MONGO_URI || "mongodb://localhost:27017/clean_arch",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            synchronize: true,
            logging: false,
            entities: [`${__dirname}/../../domain/entities/*.ts`],
            subscribers: [],
            migrations: [`${__dirname}/../../infrastructure/databse/migrations/*.ts`],
            migrationsRun: true,
        });
    }
    async setup() {
        logger_1.default.info("Initializing database connection...");
        await this.appDataSource.initialize();
    }
    getDataSource() {
        return this.appDataSource;
    }
    getName() {
        return "Insights Database";
    }
}
exports.AppDataSource = AppDataSource;
