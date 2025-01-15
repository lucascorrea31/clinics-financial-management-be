import "reflect-metadata";
import { DataSource } from "typeorm";
import { PluggableDataSource } from "../../interfaces/database/pluggable-data-source";
import logger from "../logging/logger";

export class AppDataSource implements PluggableDataSource {
	private readonly appDataSource: DataSource;

	constructor() {
		this.appDataSource = new DataSource({
			type: "mongodb",
			url: process.env.MONGO_URI ?? "mongodb://localhost:27017/clean_arch",
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

	async setup(): Promise<void> {
		logger.info("Initializing database connection...");
		await this.appDataSource.initialize();
	}

	getDataSource(): DataSource {
		return this.appDataSource;
	}

	getName(): string {
		return "Insights Database";
	}
}
