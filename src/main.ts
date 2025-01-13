import app from "./infrastructure/http/server";
import routes from "./interfaces/routes";
import logger from "./infrastructure/logging/logger";
import morgan from "morgan";
import { AppDataSource } from "./infrastructure/database/data-source";

const PORT = process.env.PORT || 3000;

(async () => {
	try {
		await AppDataSource.initialize();
		logger.info("Database connected successfully.");

		app.use(
			morgan("combined", {
				stream: {
					write: (message: string) => logger.info(message.trim()),
				},
			})
		);

		// Use routes
		app.use("/api", routes);

		// Start server
		app.listen(PORT, () => {
			logger.info(`Server running on http://localhost:${PORT}`);
		});
	} catch (error) {
		logger.error("Error during Data Source initialization:", error);
		process.exit(1);
	}
})();
