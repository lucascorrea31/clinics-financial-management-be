"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./infrastructure/http/server"));
const routes_1 = __importDefault(require("./interfaces/routes"));
const logger_1 = __importDefault(require("./infrastructure/logging/logger"));
const morgan_1 = __importDefault(require("morgan"));
const data_source_1 = require("./infrastructure/database/data-source");
const PORT = process.env.PORT || 3000;
(async () => {
    try {
        await data_source_1.AppDataSource.initialize();
        logger_1.default.info("Database connected successfully.");
        server_1.default.use((0, morgan_1.default)("combined", {
            stream: {
                write: (message) => logger_1.default.info(message.trim()),
            },
        }));
        // Use routes
        server_1.default.use("/api", routes_1.default);
        // Start server
        server_1.default.listen(PORT, () => {
            logger_1.default.info(`Server running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        logger_1.default.error("Error during Data Source initialization:", error);
        process.exit(1);
    }
})();
