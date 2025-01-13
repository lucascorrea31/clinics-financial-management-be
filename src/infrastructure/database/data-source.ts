import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
	type: "mongodb",
	url: process.env.MONGO_URI || "mongodb://localhost:27017/clean_arch",
	useNewUrlParser: true,
	useUnifiedTopology: true,
	synchronize: true, // Sincroniza automaticamente as entidades com o banco (desativar em produção)
	logging: false,
	entities: [`${__dirname}/../../domain/entities/*.ts`], // Caminho para as entidades
});
