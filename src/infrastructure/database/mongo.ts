import mongoose from "mongoose";
import logger from "../logging/logger";

export const connectMongo = async () => {
	try {
		await mongoose.connect(
			process.env.MONGO_URI || "mongodb://localhost:27017/clean_arch"
		);
		logger.info("MongoDB connected");
	} catch (error) {
		logger.error("MongoDB connection error:", error);
		process.exit(1);
	}
};
